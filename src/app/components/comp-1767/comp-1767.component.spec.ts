/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1767Component } from './comp-1767.component';

describe('Comp1767Component', () => {
  let component: Comp1767Component;
  let fixture: ComponentFixture<Comp1767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
