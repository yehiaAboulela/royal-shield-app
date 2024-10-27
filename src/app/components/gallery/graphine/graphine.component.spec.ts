import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphineComponent } from './graphine.component';

describe('GraphineComponent', () => {
  let component: GraphineComponent;
  let fixture: ComponentFixture<GraphineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
