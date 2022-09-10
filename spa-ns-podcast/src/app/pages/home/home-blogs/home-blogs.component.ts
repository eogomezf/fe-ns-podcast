import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css']
})
export class HomeBlogsComponent implements OnInit {

  blogs:any[] = [];
  loading:boolean=false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getAnyPost("categories","3")
    .subscribe(resp => {

      console.log(resp)
      for(let i = 0; i < 3; i++){
        this.blogs.push(resp[i])
      }

      this.loading = true;

    })
  }

}
