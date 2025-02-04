import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OffersService } from '../../shared/services/offers.service';
import { Offer } from '../../shared/interfaces/offer';
import { ToastrService } from 'ngx-toastr';
import { TableUtil } from '../../tableUtil';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  standalone: false,
})
export class RequestsComponent implements OnInit, AfterViewInit {
  mailTo: string = `mailto:`;
  offers: Offer[] = [];
  warningMsg: boolean = false;

  // Mat Table columns to display
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'msg',
    'company',
    'action',
  ];

  // Data source for mat-table
  dataSource = new MatTableDataSource<Offer>(this.offers);
  paginatorNumbers: number[] = [5, 10];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private OffersService: OffersService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.OffersService.getAllOffers().subscribe({
      next: (res) => {
        this.dataSource.data = res.offers.reverse();
        // this.paginatorNumbers = [5, 10, res.offers.length];
        if (res.offers.length > 10) {
          this.paginatorNumbers = [5, 10, res.offers.length];
        }
      },
    });
  }

  ngAfterViewInit(): void {
    // Assign paginator and sort to the data source after view initialization
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  checkOffer(id: string): void {
    this.OffersService.checkOffer(id).subscribe({
      next: (res) => {
        this.dataSource.data = res.offers.reverse();
      },
    });
  }

  uncheckOffer(id: string): void {
    this.OffersService.uncheckOffer(id).subscribe({
      next: (res) => {
        this.dataSource.data = res.offers.reverse();
      },
    });
  }

  deleteOffer(id: string): void {
    this.OffersService.deleteOffer(id).subscribe({
      next: (res) => {
        this.dataSource.data = res.remainingActivations.reverse();
      },
    });
  }

  deleteAll(): void {
    this.OffersService.deleteOffers().subscribe({
      next: (res) => {
        this.warningMsg = false;
        this.dataSource.data = [];
        this.toaster.success('All requests have been deleted successfully');
      },
    });
  }

  exportData(): void {
    TableUtil.exportTableToExcel('requests', 'Site-Messages');
  }
}
