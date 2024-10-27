import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappingComponent } from './wrapping.component';

describe('WrappingComponent', () => {
  let component: WrappingComponent;
  let fixture: ComponentFixture<WrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
