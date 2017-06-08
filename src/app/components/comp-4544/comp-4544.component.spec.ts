/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4544Component } from './comp-4544.component';

describe('Comp4544Component', () => {
  let component: Comp4544Component;
  let fixture: ComponentFixture<Comp4544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
