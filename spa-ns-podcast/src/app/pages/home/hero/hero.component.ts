import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  trending:string;
  title:string;
  content:string;
  listen:string;
  media:string;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPost("hero")
    .subscribe(resp => {

      this.trending = resp[0].acf.hero.trending;
      this.title = resp[0].acf.hero.title;
      this.content = resp[0].acf.hero.content;
      this.listen = resp[0].acf.hero.listen;
      this.media = resp[0].acf.hero.media.url;

    })
  }

}
