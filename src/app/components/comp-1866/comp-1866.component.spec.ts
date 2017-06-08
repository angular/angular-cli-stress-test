/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1866Component } from './comp-1866.component';

describe('Comp1866Component', () => {
  let component: Comp1866Component;
  let fixture: ComponentFixture<Comp1866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
