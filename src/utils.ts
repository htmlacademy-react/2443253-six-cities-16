import { CityMap } from './const';
import { City } from './types/city';

export default function takeCity (city:string):City {
  switch (city) {
    case CityMap.Amsterdam.name: return CityMap.Amsterdam;
    case CityMap.Brussels.name: return CityMap.Brussels;
    case CityMap.Cologne.name: return CityMap.Cologne;
    case CityMap.Dusseldorf.name: return CityMap.Dusseldorf;
    case CityMap.Hamburg.name: return CityMap.Hamburg;
    case CityMap.Paris.name: return CityMap.Paris;
    default : return CityMap.Paris;
  }
}
