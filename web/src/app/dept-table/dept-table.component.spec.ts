import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptTableComponent } from './dept-table.component';

describe('DeptTableComponent', () => {
  let component: DeptTableComponent;
  let fixture: ComponentFixture<DeptTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
