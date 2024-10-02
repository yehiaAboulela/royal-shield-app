import { ActivatedWarrantys } from './../../shared/interfaces/activated-warrantys';
import { Component, OnInit } from '@angular/core';
import { SerialService } from '../../shared/services/serials.service';
import { TableUtil } from '../../tableUtil';

@Component({
  selector: 'app-activated-warrantys',
  templateUrl: './activated-warrantys.component.html',
  styleUrl: './activated-warrantys.component.css',
})
export class ActivatedWarrantysComponent implements OnInit {
  constructor(private SerialService: SerialService) {}
  searchTerm: string = '';
  noWarranty: boolean = false;
  ActivatedWarrantys: ActivatedWarrantys[] = [];
  fullScreenImg: string = '';

  ngOnInit(): void {
    this.SerialService.getActivatedWarrantys().subscribe({
      next: (res) => {
        console.log(res);
        this.ActivatedWarrantys = res.warrantys;
      },
      error: (err) => {
        console.log(err.error);
        this.noWarranty = true;
      },
    });
  }

  deleteSerial(serial: string) {
    this.SerialService.deleteActivation(serial).subscribe({
      next: (res) => {
        this.ActivatedWarrantys = res.remainingActivations;
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
    return `https://royal-shield.up.railway.app/${path}`;
  }

  openImgTap(src: string) {
    this.fullScreenImg = src;
  }
}
