
import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { Offer, OfferPreview } from '../../types/offer.js';
import { City } from '../../types/city.js';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const.ts';
import { Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import clsx from 'clsx';


type MapProps ={
  offers:Array<OfferPreview|Offer>;
  activeCity:City;
  selectedCardId: string;
  extraHeight:string;
  extraClass:string;
}
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps): JSX.Element {
  const {activeCity, offers, selectedCardId,extraHeight,extraClass} = props;
  const offersForCity = offers.filter((item) => item.city.name === activeCity.name);
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersForCity.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedCardId !== undefined && selectedCardId === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersForCity, selectedCardId,activeCity]);

  return (
    <section className={clsx(extraClass && extraClass,'map')}>
      <div
        style={{height: extraHeight}}
        ref={mapRef}
      >
      </div>
    </section>
  );
}

