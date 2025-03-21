import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private navState = new BehaviorSubject<boolean>(true);

  // Expose as observable
  navState$ = this.navState.asObservable();

  toggleNav() {
    this.navState.next(!this.navState.value);
  }
  openNav() {
    this.navState.next(true);
  }
  closeNav() {
    this.navState.next(false);
  }
}
