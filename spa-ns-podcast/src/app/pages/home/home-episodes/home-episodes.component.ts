import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-episodes',
  templateUrl: './home-episodes.component.html',
  styleUrls: ['./home-episodes.component.css']
})
export class HomeEpisodesComponent implements OnInit {


  podcasts:any[] = [];
  types:any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPocats()
    .subscribe(cpt => {


      for(let i = 0; i < 3; i++){
        this.podcasts.push(cpt[i])

        this.types.push((cpt[i].acf.episode.type))
      }

    })

  }

}

