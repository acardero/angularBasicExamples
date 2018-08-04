import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNested3Component } from './my-nested3.component';

describe('MyNested3Component', () => {
  let component: MyNested3Component;
  let fixture: ComponentFixture<MyNested3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNested3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNested3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
