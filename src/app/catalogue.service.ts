import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:8087';

  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  getAllCategories() {
    return this.http.get(this.host + '/categories');
  }

  getRessource(url) {
    return this.http.get(url);
  }

  deleteRessource(url) {
    console.log(this.authService.jwt);
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    console.log(headers);
    return this.http.delete(url, { headers : headers});
  }

  postRessource(url,data) {
    console.log(this.authService.jwt);
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    console.log(headers);
    return this.http.post(url,data, { headers : headers});
  }

}
