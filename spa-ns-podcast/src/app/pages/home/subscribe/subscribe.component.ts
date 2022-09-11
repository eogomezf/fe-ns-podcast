import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { functions } from '../../../helpers/functions';
import { alerts } from '../../../helpers/alerts';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public f = this.form.group({

		email: ['', [Validators.required, Validators.email]]

  	})
 
  button:string;
  title:string;
  content:string;
  email:string;

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

    this.dataService.getPost("subscribe")
    .subscribe(resp => {

      this.button = resp[0].acf.subscribe.button;
      this.title = resp[0].acf.subscribe.title;
      this.content = resp[0].acf.subscribe.content;
      this.email = resp[0].acf.subscribe.email;
     

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
