import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/internal/operators';
import { Polygon } from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class AppMapService {
  private mapUrl = 'api/map.xsjs';

  constructor(private messageService: MessageService, private http: HttpClient) {}

  postData(polygon: Polygon): Observable<any> {
    return this.http.post<any>(this.mapUrl, polygon).pipe(
      map((res: any) => {
        res.results.forEach(event => {
          event.GEO_LOCATION = JSON.parse(event.GEO_LOCATION)
        });
        return res;
      }),
      catchError(res => {
        return this.handleError('postData()', res);
      })
    );
  }

  private handleError(method: string, res: HttpErrorResponse): Observable<any> {
    this.messageService.error(`${method} ${res.message}`);
    console.error(res.error);
    return of(null);
  }
}
