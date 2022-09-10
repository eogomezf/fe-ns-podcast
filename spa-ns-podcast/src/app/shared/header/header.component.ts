import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pages:any[] = [];
  btnsubscribe:string;
  btnlogin:string;
  logourl:string;
  loading:boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPages()
    .subscribe(resp => {

      let i;
      for(i in resp){
        this.pages.push(resp[i])
      }

    })

    this.dataService.getPost("header")
    .subscribe(resp => {

      this.btnsubscribe = resp[0].acf.header.buttonsubscribe;
      this.btnlogin = resp[0].acf.header.buttonlogin;
      this.logourl = resp[0].acf.header.logo.url

      this.loading = true;

    })
  }

}
