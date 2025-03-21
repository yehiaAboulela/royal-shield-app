import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../shared/services/states.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  standalone: false,
})
export class AdminLayoutComponent implements OnInit {
  constructor(private statesService: StatesService) {}

  isNavOpen = true;

  ngOnInit(): void {
    this.statesService.navState$.subscribe((state) => {
      this.isNavOpen = state;
    });
  }

  toggleSidebar() {
    this.statesService.toggleNav();
  }
}
