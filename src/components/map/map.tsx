
import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { Offer, OfferPreview } from '../../types/offer.js';
import { City } from '../../types/city.js';
import { layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import clsx from 'clsx';
import { CurrentCustomIcon, DefaultCustomIcon } from '../../const.ts';


type MapProps ={
  offers:Array<OfferPreview|Offer>;
  activeCity:City;
  selectedCardId: string;
  extraHeight:string;
  extraClass:string;
}

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
              ? CurrentCustomIcon
              : DefaultCustomIcon
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

