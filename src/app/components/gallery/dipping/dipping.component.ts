import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dipping',
  templateUrl: './dipping.component.html',
  styleUrl: './dipping.component.css',
})
export class DippingComponent {
  @ViewChild('screenshotDiv') screenshotDiv!: ElementRef;
  color1: string = '#ffbf00';
  finalColor: string = this.color1;
  changeColor() {
    this.finalColor = this.color1;
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
