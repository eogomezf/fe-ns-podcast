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
import { Error404Component } from './error404/error404.component';
import { PipesModule } from '../pipes/pipes.modules';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    HomeEpisodesComponent,
    HomeBlogsComponent,
    GalleryComponent,
    SubscribeComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class PagesModule { }
