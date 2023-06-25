import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChanService {
  private url: string = 'https://cors-anywhere.herokuapp.com/https://a.4cdn.org/';
  private boards: string = 'boards.json';

  constructor(
    private http: HttpClient
    ) {}

  getBoards(){
    return this.http.get('http://127.0.0.1:5000').toPromise(); 
  }


}
