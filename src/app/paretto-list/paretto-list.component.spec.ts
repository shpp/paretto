/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParettoListComponent } from './paretto-list.component';

describe('ParettoListComponent', () => {
  let component: ParettoListComponent;
  let fixture: ComponentFixture<ParettoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParettoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParettoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
