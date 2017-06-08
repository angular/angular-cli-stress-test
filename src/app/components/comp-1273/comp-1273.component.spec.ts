/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1273Component } from './comp-1273.component';

describe('Comp1273Component', () => {
  let component: Comp1273Component;
  let fixture: ComponentFixture<Comp1273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
