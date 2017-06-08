/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1776Component } from './comp-1776.component';

describe('Comp1776Component', () => {
  let component: Comp1776Component;
  let fixture: ComponentFixture<Comp1776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
