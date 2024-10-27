import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintProtectionComponent } from './paint-protection.component';

describe('PaintProtectionComponent', () => {
  let component: PaintProtectionComponent;
  let fixture: ComponentFixture<PaintProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintProtectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
