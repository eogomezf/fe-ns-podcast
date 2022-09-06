import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

 
  button:string;
  title:string;
  content:string;
  email:string;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPost("subscribe")
    .subscribe(resp => {

      this.button = resp[0].acf.subscribe.button;
      this.title = resp[0].acf.subscribe.title;
      this.content = resp[0].acf.subscribe.content;
      this.email = resp[0].acf.subscribe.email;
     

    })
  }

}
