import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedWarrantysComponent } from './activated-warrantys.component';

describe('ActivatedWarrantysComponent', () => {
  let component: ActivatedWarrantysComponent;
  let fixture: ComponentFixture<ActivatedWarrantysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivatedWarrantysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatedWarrantysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
