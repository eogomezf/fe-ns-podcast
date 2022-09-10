import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('slideInLeft', [
      state('void', style({
        transform: 'translate3d(-100%, 0, 0)',
		      visibility: 'visible'
      })),
      state('right', style({
        transform: 'translateZ(0)'
      })),
      transition('void => right', [
        animate(1000)
      ])  
    ])
  ]
})
export class HeroComponent implements OnInit {

  trending:string;
  title:string;
  content:string;
  listen:string;
  media:string;
  loading:boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPost("hero")
    .subscribe(resp => {

      this.trending = resp[0].acf.hero.trending;
      this.title = resp[0].acf.hero.title;
      this.content = resp[0].acf.hero.content;
      this.listen = resp[0].acf.hero.listen;
      this.media = resp[0].acf.hero.media.url;

      this.loading = true;
    })
  }

}
