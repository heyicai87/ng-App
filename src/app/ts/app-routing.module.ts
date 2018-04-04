/**
 * Created by S10006 on 2017/12/22.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
//import { HeroesComponent } from './hero/heroes.component';
//import { HeroDetailComponent } from './hero/hero-detail.component';
//import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRouteConfig: Routes = [
  { path : '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path : 'dashboard',  component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent }
  { path : 'hero', loadChildren : './hero/hero.module#HeroModule'},
  { path : 'lion', loadChildren : './lion/lion.module#LionModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRouteConfig) ] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
