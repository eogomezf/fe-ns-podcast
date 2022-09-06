import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css']
})
export class HomeBlogsComponent implements OnInit {

  blogs:any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPost("blog")
    .subscribe(resp => {

      let i;
      for(i in resp){
        this.blogs.push(resp[i])
      }

    })
  }

}
