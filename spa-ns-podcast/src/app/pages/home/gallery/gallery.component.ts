import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],

})
export class GalleryComponent implements OnInit {



  private resizeSubscription: Subscription;
  
  galleries:any[] = [];
  picture:string;
  name:string;

  thesize:number;

  constructor(private dataService: DataService,
              private resizeService: ResizeService) { }

  ngOnInit(): void {

    this.thesize = this.resizeService.getWindowSize();

   this.getData();

  }

  getData(){

    this.galleries = [];
    
    this.dataService.getPost("gallery")
    .subscribe(resp => {
         
      let count = this.validateSize(this.thesize)
      
      for(let i = 0; i < count; i++){
          this.galleries.push(resp[0].acf.picture[i]);
      }

    })
  }

  pictureSelected(url:string, name:string){

    this.picture = url;
    this.name = name;

  }

  onResize(e){

    this.thesize =  e.target.innerWidth;

    this.validateSize( this.thesize)
  }

  validateSize(s){

    let maxPic = 12;
    if(s < 992 && s > 767){
     maxPic = 9;
     this.getData();
    }else if(s < 768 ){
     maxPic = 6;
     this.getData();
    }else if(s > 993 ){
     maxPic = 12;
     this.getData();
   }

   return maxPic;
  }
  

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
