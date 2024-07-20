
import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { OfferPreview } from '../../types/offer.js';
import { City } from '../../types/city.js';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const.ts';
import { Icon, layerGroup, Marker} from 'leaflet';


type MapProps ={
  offers:OfferPreview[];
  activeCity:City;
  selectedPoint: Location | undefined;
}
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps): JSX.Element {
  const {activeCity, offers, selectedPoint} = props;
  const offersForCity = offers.filter((item) => item.city.name === activeCity.name);

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersForCity.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)

          // .setIcon(
          //   selectedPoint !== undefined && offer.city.name === activeCity.title
          //     ? currentCustomIcon
          //     : defaultCustomIcon
          // )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersForCity, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

