/**
 * Created by S10006 on 2017/12/22.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { IncludeRoutingModule } from  './include-routing.module';

@NgModule({
  imports:[
    CommonModule,
    IncludeRoutingModule
  ],
  declarations:[
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class IncludeModule {}
