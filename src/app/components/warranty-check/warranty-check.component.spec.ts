import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyCheckComponent } from './warranty-check.component';

describe('WarrantyCheckComponent', () => {
  let component: WarrantyCheckComponent;
  let fixture: ComponentFixture<WarrantyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
