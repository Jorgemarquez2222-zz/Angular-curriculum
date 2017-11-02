import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesTestComponent } from './observables-test.component';

describe('ObservablesTestComponent', () => {
  let component: ObservablesTestComponent;
  let fixture: ComponentFixture<ObservablesTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
