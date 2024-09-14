import { Component, Input } from '@angular/core';
import confetti from 'canvas-confetti';
import { ConfettiService } from '../../shared/services/confetti.service';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrl: './confetti.component.css',
})
export class ConfettiComponent {
  constructor(private confettiService: ConfettiService) {}
  @Input() active: boolean = false;
  triggerConfetti() {
    this.confettiService.launchConfetti();
  }
}
