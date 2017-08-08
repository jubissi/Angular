/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PizzariaComponent } from './pizzaria.component';

describe('PizzariaComponent', () => {
  let component: PizzariaComponent;
  let fixture: ComponentFixture<PizzariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
