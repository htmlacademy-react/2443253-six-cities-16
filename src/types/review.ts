import { Host } from './host';


export type Review = {
  id?:string;
  date: string;
  offerId?: string;
  user: Host;
  comment: string;
  rating: number;
}

