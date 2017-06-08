/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4102Component } from './comp-4102.component';

describe('Comp4102Component', () => {
  let component: Comp4102Component;
  let fixture: ComponentFixture<Comp4102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
