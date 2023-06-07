import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  //@Input() personas:Persona[]=[]
  get personas():Persona[]{
    return this.personasService.personas;
  }
  constructor(private personasService:PersonasService){

  }
}
