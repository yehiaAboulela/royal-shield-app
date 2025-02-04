import { ActivatedSearchPipe } from './../../shared/pipes/activated-search.pipe';
import { ActivatedWarrantys } from './../../shared/interfaces/activated-warrantys';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SerialService } from '../../shared/services/serials.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from '../../tableUtil';

@Component({
  selector: 'app-activated-warrantys',
  templateUrl: './activated-warrantys.component.html',
  styleUrls: ['./activated-warrantys.component.css'],
  standalone: false,
})
export class ActivatedWarrantysComponent implements OnInit, AfterViewInit {
  searchTerm: string = '';
  fullScreenImg: string = '';
  displayedColumns: string[] = [
    'name',
    'phoneNumber',
    'serialNumber',
    'address',
    'birthdate',
    'createdAt',
    'brand',
    'model',
    'color',
    'image',
    'action',
  ];

  activatedWarrantys: ActivatedWarrantys[] = [];
  dataSource = new MatTableDataSource<ActivatedWarrantys>(
    this.activatedWarrantys
  );
  paginatorNumbers: number[] = [5, 10];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SerialService: SerialService) {}

  ngOnInit(): void {
    this.SerialService.getActivatedWarrantys().subscribe({
      next: (res) => {
        this.dataSource.data = res.warrantys;
        if (res.warrantys.length > 10) {
          this.paginatorNumbers = [5, 10, res.warrantys.length];
        }
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteSerial(serial: string) {
    this.SerialService.deleteActivation(serial).subscribe({
      next: (res) => {
        this.dataSource.data = res.remainingActivations;
      },
    });
  }

  exportData(): void {
    TableUtil.exportTableToExcel(
      'activatedWarrantysTable',
      'activatedWarrantysTable'
    );
  }

  getImgPath(path: string): string {
    return `https://royal-shield-be-production.up.railway.app/${path}`;
  }

  openImgTap(src: string) {
    this.fullScreenImg = src;
  }
}
