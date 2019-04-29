import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHandlerComponent } from './add-handler.component';

describe('AddHandlerComponent', () => {
  let component: AddHandlerComponent;
  let fixture: ComponentFixture<AddHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
