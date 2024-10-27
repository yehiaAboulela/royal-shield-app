import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DippingComponent } from './dipping.component';

describe('DippingComponent', () => {
  let component: DippingComponent;
  let fixture: ComponentFixture<DippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
