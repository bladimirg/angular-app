import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes:string[]=['Spiderman','IronMan','Thor'];
  heroeBorrado:string="";
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }



  constructor(){
    console.log("Constructor")
  }
  
}
