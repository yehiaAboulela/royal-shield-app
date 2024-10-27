import { Component, OnInit } from '@angular/core';
import { ResellersService } from '../../shared/services/resellers.service';
import { Reseller } from '../../shared/interfaces/reseller';

@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrl: './resellers.component.css',
})
export class ResellersComponent {
  constructor(private ResellersService: ResellersService) {}
  resellers: Reseller[] = this.ResellersService.resellers;
  code = '';
}
