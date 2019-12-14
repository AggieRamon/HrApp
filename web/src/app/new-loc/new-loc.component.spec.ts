import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocComponent } from './new-loc.component';

describe('NewLocComponent', () => {
  let component: NewLocComponent;
  let fixture: ComponentFixture<NewLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
