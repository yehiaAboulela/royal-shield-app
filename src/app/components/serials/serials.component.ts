import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerialService } from './../../shared/services/serials.service';
import { ToastrService } from 'ngx-toastr';
import { Serial } from './../../shared/interfaces/serial';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TableUtil } from '../../tableUtil';
@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css'],
  standalone: false,
})
export class SerialsComponent implements OnInit, AfterViewInit {
  // Columns to display in the table
  displayedColumns: string[] = [
    'serialNumber',
    'numOfChecks',
    'branch',
    'activated',
    'action',
  ];
  // Data source for the table (mat-table)
  dataSource = new MatTableDataSource<Serial>([]);

  // Form for serials
  serialForm: FormGroup;
  paginatorNumbers: number[] = [10, 30];

  // Pagination related properties
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; // Add this line

  constructor(
    private SerialService: SerialService,
    private FormBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.serialForm = this.FormBuilder.group({
      serialNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z]{3}-[A-Za-z0-9]{6}$'),
        ],
      ],
      branch: ['', [Validators.required]],
    });
  }

  branchUpdateForm: FormGroup = this.FormBuilder.group({
    branch: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // Fetch serials on component load
    this.SerialService.getSerials().subscribe({
      next: (res) => {
        // Setting the fetched serials in the data source
        this.dataSource.data = res.serials;
        if (res.serials.length > 30) {
          this.paginatorNumbers = [10, 30, res.serials.length];
        }
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to add a serial using the serialForm
  addSerial(): void {
    if (this.serialForm.valid) {
      this.SerialService.addSerial(this.serialForm.value).subscribe({
        next: (res) => {
          this.dataSource.data = res.serials; // Update the table data
          this.toastr.success('Added successfully');
        },
        error: (err) => {
          this.toastr.warning('Serial Already exists in database');
        },
      });
    } else {
      this.serialForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  // Method to delete a serial
  deleteSerial(serialNum: string): void {
    this.SerialService.deleteSerial(serialNum).subscribe({
      next: (res) => {
        if (res.msg == 'success') {
          this.dataSource.data = res.serial; // Update the table data after deletion
        }
      },
    });
  }

  // Export data to Excel (method from TableUtil)
  exportData(): void {
    TableUtil.exportTableToExcel('serials', 'serials');
  }

  UpdateBranch(serial: string) {
    this.branchUpdateForm.value.serialNumber = serial;
    this.SerialService.updateBranch(this.branchUpdateForm.value).subscribe({
      next: (res) => {
        this.toastr.success('Success', 'branch successfully Updated');
        this.dataSource.data = res.serials;
        this.branchUpdateForm.reset();
      },
    });
  }
}
