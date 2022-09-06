import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IPages } from '../../interface/pages.interface'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public PagesModule:IPages[]=[]

  pages:any[] = [];
  posts: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPages()
    .subscribe(resp => {

      console.log(resp)
      let i;
      for(i in resp){
        this.pages.push(resp[i])
      }

      console.log(this.pages)
    })
  }

}
