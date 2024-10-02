import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../shared/services/offers.service';
import { Offer } from '../../shared/interfaces/offer';
import { ToastrService } from 'ngx-toastr';
import { TableUtil } from '../../tableUtil';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
})
export class RequestsComponent implements OnInit {
  constructor(
    private OffersService: OffersService,
    private toaster: ToastrService
  ) {}
  mailTo: string = `mailto:`;
  offers: Offer[] = [];
  warningMsg: boolean = false;
  ngOnInit(): void {
    this.OffersService.getAllOffers().subscribe({
      next: (res) => {
        this.offers = res.offers.reverse();
      },
    });
  }

  checkOffer(id: string): void {
    this.OffersService.checkOffer(id).subscribe({
      next: (res) => {
        this.offers = res.offers.reverse();
      },
    });
  }
  uncheckOffer(id: string): void {
    this.OffersService.uncheckOffer(id).subscribe({
      next: (res) => {
        this.offers = res.offers.reverse();
      },
    });
  }

  deleteAll(): void {
    this.OffersService.deleteOffers().subscribe({
      next: (res) => {
        this.warningMsg = false;

        this.offers = [];
        this.toaster.success('All requests have been deleted succefully');
      },
    });
  }

  exportData(): void {
    TableUtil.exportTableToExcel('requests', 'Site-Messages');
  }
}
