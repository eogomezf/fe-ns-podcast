
import { NgModule } from '@angular/core';
import { SubstrPipe } from './substr.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ SubstrPipe],
  imports: [CommonModule],
  exports: [ SubstrPipe]
})
export class PipesModule { }
