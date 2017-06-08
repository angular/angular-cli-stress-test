/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2544Component } from './comp-2544.component';

describe('Comp2544Component', () => {
  let component: Comp2544Component;
  let fixture: ComponentFixture<Comp2544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
