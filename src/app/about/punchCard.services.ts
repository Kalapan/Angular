import { Injectable } from '@angular/core';
import { punchCard } from './punchCard';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PunchCardService {

  constructor(private http: Http) {}

  public punchCards: any;

public getPunchCards(callback:any): void {
  this.http.get('http://localhost:1337/getPunchCard').subscribe(data => {
    console.log(data);
    callback(data.json());
  });
}

public postPunchCards(model: any,callback:any): void {
  this.http.post('http://localhost:1337/postPunchCard',model).subscribe(data => {
  callback(data.json());
  })
}

public deletePunchCards(punchID:any): void {
  this.http.delete('http://localhost:1337/deletePunchCard'+'?ID='+punchID).subscribe(data => {
    return data.json();
  })
}
}

/*public getPunchCards(): Promise <punchCard | Array<punchCard>> {
  const url = 'http://localhost:1337/getPunchCards';
  return this.http.get(url)
  .toPromise()
  .then(response => response.json().data as punchCard)
  .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}*/
