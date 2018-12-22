import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { River } from './river';
import { Sample } from './sample';

@Injectable()
export class RiversService {

  constructor(private http: Http) { }

  getRivers(): Observable<River[]> {
     return this.http.get("/server_api/api/v1/rivers")
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSamples(): Observable<Sample[]> {
    return this.http.get("/server_api/api/v1/rivers/samples")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 }

}
