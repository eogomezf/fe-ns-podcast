import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  podcasts:any[] = [];
  types:any[] = [];
  loading:boolean = false;

  season:string;
  mainTitle:string;
  title:string;
  content:string;
  date:string;
  pic:string;
  picName:string;

  constructor(private dataService: DataService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    let params = this.activatedRouter.snapshot.params["param"]

    console.log(params)

    this.dataService.getPodcast(params)
    .subscribe(cpt => {

      console.log(cpt)
    

      this.mainTitle = cpt[0].title.rendered;
      this.title = cpt[0].acf.episode.title;
      this.content = cpt[0].acf.episode.content;
      this.season = cpt[0].acf.episode.season;
      this.date = cpt[0].acf.episode.date;

      this.pic = cpt[0].acf.episode.picture.sizes.medium;
      this.picName = cpt[0].acf.episode.picture.filename;

      this.types.push((cpt[0].acf.episode.type))

      console.log(this.types)

      this.loading = true;
    
    })

    

  }

}

