import { Point } from 'mapbox-gl';

export class Event {
  EVENT_ID: string;
  EVENT_DATE: Date;
  EVENT_TYPE: string;
  ACTOR_1: string;
  ACTOR_2: string;
  COUNTRY_NAME: string;
  FATALITIES: number;
  GEO_LOCATION: Point;
  NOTES: string;
}
