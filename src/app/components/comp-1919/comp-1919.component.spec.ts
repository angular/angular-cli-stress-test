/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1919Component } from './comp-1919.component';

describe('Comp1919Component', () => {
  let component: Comp1919Component;
  let fixture: ComponentFixture<Comp1919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
