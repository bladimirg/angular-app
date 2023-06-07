import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl:'hero.component.html'
})
export class HeroComponent{
    nombre: string = "Iron Man";
    edad   : Number = 25;
    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }
    cambiarEdad():void{
        this.edad = 30;
    }

}