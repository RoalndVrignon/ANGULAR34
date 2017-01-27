import { Component,OnInit} from '@angular/core';
import {GamesService} from "./games.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app works!';
  jeux;
  
  name:string;
constructor(private gamou:GamesService) { }
  ngOnInit()
  {
    this.jeux = this.gamou.getJeux();
  }
}

