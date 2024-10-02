import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  private count = 200;
  private defaults = {
    origin: { y: 0.7 },
  };

  constructor() {}

  // A method that handles the particle effects
  private fire(particleRatio: number, opts: any) {
    confetti({
      ...this.defaults,
      ...opts,
      particleCount: Math.floor(this.count * particleRatio),
    });
  }

  // The main method to launch the confetti effect
  launchConfetti() {
    // Call the fire function with various configurations
    this.fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.fire(0.2, {
      spread: 60,
    });

    this.fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
}
