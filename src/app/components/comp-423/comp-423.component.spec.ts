/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp423Component } from './comp-423.component';

describe('Comp423Component', () => {
  let component: Comp423Component;
  let fixture: ComponentFixture<Comp423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
