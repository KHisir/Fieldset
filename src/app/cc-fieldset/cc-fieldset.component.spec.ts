/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CcFieldsetComponent } from './cc-fieldset.component';

describe('CcFieldsetComponent', () => {
  let component: CcFieldsetComponent;
  let fixture: ComponentFixture<CcFieldsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcFieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
