import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HeroComponent } from './home/hero/hero.component';
import { HomeEpisodesComponent } from './home/home-episodes/home-episodes.component';
import { HomeBlogsComponent } from './home/home-blogs/home-blogs.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    HomeEpisodesComponent,
    HomeBlogsComponent,
    GalleryComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
