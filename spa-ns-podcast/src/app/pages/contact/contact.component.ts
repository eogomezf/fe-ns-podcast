import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { functions } from '../../helpers/functions';
import { alerts } from '../../helpers/alerts';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public f = this.form.group({

		email: ['', [Validators.required]],
		userEmail: ['', Validators.required],
		subject: ['', Validators.required],
		message: ['', Validators.required]

  	})

    formSubmitted = false;


  constructor(private form: FormBuilder) { }

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
  }

  Submit(){

    console.log(this.f)

    this.formSubmitted = true;

    if(this.f.invalid){

      return;
  
      }
    //EXAMPLE OF SUBMIT
    alerts.basicAlert("Success", 'Your message was sent', "success")
  }

  invalidField(field:string){

    return functions.invalidField(field, this.f, this.formSubmitted);

  }

  

}
