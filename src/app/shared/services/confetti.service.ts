import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  constructor() {}

  // launchConfetti() {
  //   setInterval(() => {
  //     confetti({
  //       particleCount: 30,
  //       angle: 60,
  //       spread: 155,
  //       origin: { x: 0 }, // Left side
  //     });
  //     confetti({
  //       particleCount: 30,
  //       angle: 120,
  //       spread: 155,
  //       origin: { x: 1 }, // Right side
  //     });
  //   }, 1000); // Launches confetti every 200 milliseconds (adjust as needed)
  // }
  launchConfetti() {
    setInterval(() => {
      confetti({
        particleCount: 200,
        angle: 90, // Confetti goes straight up
        spread: 140,
        origin: { x: 0.5, y: 0 }, // Starts from the bottom center
      });
    }, 1000); // Launches confetti every 500 milliseconds
  }
}
