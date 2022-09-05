import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent
  ],
  exports:[
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
