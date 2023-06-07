import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input()
  nuevo:Persona={firstName:'',edad:0};

  @Output()
  onNuevaPersona:EventEmitter<Persona>= new EventEmitter<Persona>();

  @Input()
  personas:Persona[]=[];

  agregar(){
    if(this.nuevo.firstName.trim().length==0)
      return
    this.personas.push(this.nuevo);
    this.onNuevaPersona.emit(this.nuevo);
    this.nuevo={
      firstName:'',
      edad:0
    }
 }
}
