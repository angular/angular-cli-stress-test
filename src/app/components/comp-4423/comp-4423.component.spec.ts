/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4423Component } from './comp-4423.component';

describe('Comp4423Component', () => {
  let component: Comp4423Component;
  let fixture: ComponentFixture<Comp4423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
