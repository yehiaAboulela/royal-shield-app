import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapping',
  templateUrl: './wrapping.component.html',
  styleUrl: './wrapping.component.css'
})
export class WrappingComponent {
  color1: string = '#FF0000';
  color2: string = '#0000FF';
  color3: string = '#FFA500';
  finalColor:string = `linear-gradient(to bottom, ${this.color1}, ${this.color2}, ${this.color3})`
  changeColor(){
    this.finalColor = `linear-gradient(to bottom, ${this.color1}, ${this.color2}, ${this.color3})`
  }
}
