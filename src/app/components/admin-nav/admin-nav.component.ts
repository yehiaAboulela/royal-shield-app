import { Component } from '@angular/core';
import { StatesService } from '../../shared/services/states.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css',
  standalone: false,
})
export class AdminNavComponent {
  constructor(private statesService: StatesService) {}
  isNavOpen = true;

  ngOnInit(): void {
    this.statesService.navState$.subscribe((state) => {
      this.isNavOpen = state;
    });
  }
}
