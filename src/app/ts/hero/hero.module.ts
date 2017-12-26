/**
 * Created by S10006 on 2017/12/22.
 */
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { HeroComponent } from './hero.component'
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroRoutingModule } from  './hero-routing.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations:[
    HeroComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers:
    [ HeroService ],
})
export class HeroModule {
  title = 'app';
}
