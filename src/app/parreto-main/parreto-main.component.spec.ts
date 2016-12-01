/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParretoMainComponent } from './parreto-main.component';

describe('ParretoMainComponent', () => {
  let component: ParretoMainComponent;
  let fixture: ComponentFixture<ParretoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParretoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParretoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
