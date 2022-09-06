import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  
  pages:any[] = [];
  podcasts:any[] = [];
  content:string;
  logo:string;
  rights:string;
  facebook:string;
  linkedin:string;
  instagram:string;
  skype:string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPages()
    .subscribe(resp => {

      let i;
      for(i in resp){
        this.pages.push(resp[i])
      }

    })

    this.dataService.getPocats()
    .subscribe(cpt => {

      let i;
      for(i in cpt){
        this.podcasts.push(cpt[i])
      }

    })

    this.dataService.getPost("footer")
    .subscribe(resp => {

      this.content = resp[0].acf.footer.content;
      this.logo = resp[0].acf.footer.logo.url;
      this.rights = resp[0].acf.footer.rights;
      this.facebook = resp[0].acf.footer.facebook.url;
      this.instagram = resp[0].acf.footer.instagram.url;
      this.skype = resp[0].acf.footer.skype.url;
      this.linkedin = resp[0].acf.footer.linkedin.url;

    })

  }

}

