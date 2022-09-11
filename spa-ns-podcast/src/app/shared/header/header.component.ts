import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { functions } from '../../helpers/functions';
import { alerts } from '../../helpers/alerts';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public f = this.form.group({

		email: ['', [Validators.required, Validators.email]]

  	})

  pages:any[] = [];
  btnsubscribe:string;
  btnlogin:string;
  logourl:string;
  loading:boolean = false;

  formSubmitted = false;

  constructor(private dataService: DataService,
              private form: FormBuilder) { }

  ngOnInit(): void {

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

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

  Submit(){

    console.log(this.f)

    this.formSubmitted = true;

    if(this.f.invalid){

      return;
  
      }
    //EXAMPLE OF SUBMIT
    alerts.basicAlert("Success", 'Your sbscription was sent', "success")

  }

  invalidField(field:string){

    return functions.invalidField(field, this.f, this.formSubmitted);

  }

}
