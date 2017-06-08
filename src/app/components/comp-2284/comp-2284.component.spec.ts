/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2284Component } from './comp-2284.component';

describe('Comp2284Component', () => {
  let component: Comp2284Component;
  let fixture: ComponentFixture<Comp2284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
