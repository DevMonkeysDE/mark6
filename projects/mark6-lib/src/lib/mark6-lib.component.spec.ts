import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mark6LibComponent } from './mark6-lib.component';

describe('Mark6LibComponent', () => {
  let component: Mark6LibComponent;
  let fixture: ComponentFixture<Mark6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mark6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mark6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
