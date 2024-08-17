import { Host } from './host';


export type Review = {
  id?:string;
  offerId?: string;
  user: Host;
  rating: number;
  review: string;
  date : string;
}

