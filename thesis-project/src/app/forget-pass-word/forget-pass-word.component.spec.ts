import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassWordComponent } from './forget-pass-word.component';

describe('ForgetPassWordComponent', () => {
  let component: ForgetPassWordComponent;
  let fixture: ComponentFixture<ForgetPassWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
