/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2038Component } from './comp-2038.component';

describe('Comp2038Component', () => {
  let component: Comp2038Component;
  let fixture: ComponentFixture<Comp2038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
