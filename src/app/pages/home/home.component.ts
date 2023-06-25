import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ChanService } from 'src/app/service/chan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards: any = {}

  public constructor(
    public chan: ChanService,
    public http: HttpClient
  ){
    console.log("hi")
  }

  ngOnInit(){
    console.log('lol')
    this.chan.getBoards().then(r => this.boards = r)
  }



}
