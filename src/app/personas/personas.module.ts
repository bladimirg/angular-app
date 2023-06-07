import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListadoComponent } from './listado/listado.component';
import { AddComponent } from './add/add.component';
import { PersonasService } from './services/personas.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ],
  providers:[
    PersonasService
  ]
})
export class PersonasModule { }
