import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventBinding2Component } from './my-event-binding2.component';

describe('MyEventBinding2Component', () => {
  let component: MyEventBinding2Component;
  let fixture: ComponentFixture<MyEventBinding2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventBinding2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
