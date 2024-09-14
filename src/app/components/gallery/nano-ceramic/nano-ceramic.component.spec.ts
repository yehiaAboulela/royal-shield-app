import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoCeramicComponent } from './nano-ceramic.component';

describe('NanoCeramicComponent', () => {
  let component: NanoCeramicComponent;
  let fixture: ComponentFixture<NanoCeramicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NanoCeramicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanoCeramicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
