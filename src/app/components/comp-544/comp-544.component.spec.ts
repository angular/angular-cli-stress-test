/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp544Component } from './comp-544.component';

describe('Comp544Component', () => {
  let component: Comp544Component;
  let fixture: ComponentFixture<Comp544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
