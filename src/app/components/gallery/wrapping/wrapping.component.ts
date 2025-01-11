import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-wrapping',
    templateUrl: './wrapping.component.html',
    styleUrl: './wrapping.component.css',
    standalone: false
})
export class WrappingComponent {
  @ViewChild('screenshotDiv') screenshotDiv!: ElementRef;
  color1: string = '#FF0000';
  color2: string = '#0000FF';
  color3: string = '#FFA500';
  finalColor: string = `linear-gradient(to right, ${this.color1}, ${this.color2}, ${this.color3})`;
  changeColor() {
    this.finalColor = `linear-gradient(to right, ${this.color1}, ${this.color2}, ${this.color3})`;
  }
  takeScreenshot() {
    html2canvas(this.screenshotDiv.nativeElement).then((canvas) => {
      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'screenshot.png';
      link.click();
    });
  }
}
