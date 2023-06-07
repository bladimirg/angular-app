import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input()
  nuevo:Persona={firstName:'',edad:0};
  constructor(private personasService:PersonasService){
  }

  agregar(){
    if(this.nuevo.firstName.trim().length==0)
      return
    this.personasService.agregarPersona(this.nuevo);
    this.nuevo={
      firstName:'',
      edad:0
    }
 }
}
