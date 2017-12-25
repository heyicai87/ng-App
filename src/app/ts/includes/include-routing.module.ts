/**
 * Created by S10006 on 2017/12/22.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const includeRoutes: Routes = [

];

@NgModule({
  imports:[
    RouterModule.forChild(includeRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class IncludeRoutingModule {}
