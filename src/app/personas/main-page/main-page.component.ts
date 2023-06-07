import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../services/personas.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    nuevo: Persona = {
      firstName : '',
      edad : 0
    }
    get personas():Persona[]{
      return this.personasService.personas;
    }

    constructor(private personasService:PersonasService){
    }
}
