/**
 * Created by S10006 on 2018/2/24.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LionComponent }  from './lion.component';
import { LionKingComponent } from './lionKing.component';

const lionRoutes: Routes = [
  {
    path : '',
    component : LionComponent,
    children : [
      { path : '', component : LionKingComponent }
    ]
  }
];

@NgModule({
  imports : [
    RouterModule.forChild(lionRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class LionRoutingModule {}
