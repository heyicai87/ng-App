/**
 * Created by S10006 on 2018/2/24.
 */
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { LionComponent }  from './lion.component';
import { LionKingComponent } from './lionKing.component';
import { LionRoutingModule } from  './lion-routing.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    LionRoutingModule
  ],
  declarations:[
    LionComponent,
    LionKingComponent
  ],
  providers:
    [],
})
export class LionModule {
  title = 'app';
}
