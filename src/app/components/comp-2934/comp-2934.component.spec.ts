/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2934Component } from './comp-2934.component';

describe('Comp2934Component', () => {
  let component: Comp2934Component;
  let fixture: ComponentFixture<Comp2934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
