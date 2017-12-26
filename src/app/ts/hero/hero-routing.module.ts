/**
 * Created by S10006 on 2017/12/22.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from  './hero.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroRoutes: Routes = [
  {
    path : '',
    component : HeroComponent,
    children:[
      { path: '', component: HeroesComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(heroRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class HeroRoutingModule {}
