/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParettoMainComponent } from './paretto-main.component';

describe('ParettoMainComponent', () => {
  let component: ParettoMainComponent;
  let fixture: ComponentFixture<ParettoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParettoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParettoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
