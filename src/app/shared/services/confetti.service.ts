import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  constructor() {}

  launchConfetti() {
    setInterval(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 155,
        origin: { x: 0 }, // Left side
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 155,
        origin: { x: 1 }, // Right side
      });
    }, 500); // Launches confetti every 200 milliseconds (adjust as needed)
  }
}
