import { Injectable } from "@angular/core";
import { Persona } from "../interfaces/persona.interface";

@Injectable()
export class PersonasService{
    constructor(){
        console.log("servicio Inicializado")
    }

    private _personas:Persona[] = [
        {
          firstName: "Bladimir",
          edad:10
        },
        {
          firstName: "Carlos",
          edad:2
        }
    ];
    get personas():Persona[]{
        return [...this._personas];
    }
    agregarPersona(persona:Persona){
        this._personas.push(persona);
    }
    
}