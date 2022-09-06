import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleries:any[] = [];
  picture:string;
  name:string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPost("gallery")
    .subscribe(resp => {

      this.galleries=(resp[0].acf.picture);

    })
  }

  pictureSelected(url:string, name:string){

    this.picture = url;
    this.name = name;

  }

}
