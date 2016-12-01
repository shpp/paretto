/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParretoListComponent } from './parreto-list.component';

describe('ParretoListComponent', () => {
  let component: ParretoListComponent;
  let fixture: ComponentFixture<ParretoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParretoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParretoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
