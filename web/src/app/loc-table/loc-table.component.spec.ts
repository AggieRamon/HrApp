import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocTableComponent } from './loc-table.component';

describe('LocTableComponent', () => {
  let component: LocTableComponent;
  let fixture: ComponentFixture<LocTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
