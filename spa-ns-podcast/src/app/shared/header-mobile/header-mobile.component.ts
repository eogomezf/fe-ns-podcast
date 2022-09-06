import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  pages:any[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPages()
    .subscribe(resp => {

      let i;
      for(i in resp){
        this.pages.push(resp[i])
      }

    })
  }

}
