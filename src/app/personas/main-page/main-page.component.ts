import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    personas:Persona[] = [
      {
        firstName: "Bladimir",
        edad:10
      },
      {
        firstName: "Carlos",
        edad:2
      }
    ];
    
    nuevo: Persona = {
      firstName : '',
      edad : 0
    }
    agregarNuevaPersona( arg:Persona){
      this.personas.push(arg);
    }
}
