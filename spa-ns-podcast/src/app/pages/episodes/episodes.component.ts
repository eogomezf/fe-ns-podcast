import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  podcasts:any[] = [];
  types:any[] = [];
  loading:boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {


    this.dataService.getPocats()
    .subscribe(cpt => {
    
      let i;
      for( i in cpt){
        this.podcasts.push(cpt[i])

        this.types.push((cpt[i].acf.episode.type))
      }
      this.loading = true;
      console.log(this.podcasts)
    })

    

  }

}

