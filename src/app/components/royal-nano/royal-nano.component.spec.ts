import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalNanoComponent } from './royal-nano.component';

describe('RoyalNanoComponent', () => {
  let component: RoyalNanoComponent;
  let fixture: ComponentFixture<RoyalNanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoyalNanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyalNanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
