/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp707Component } from './comp-707.component';

describe('Comp707Component', () => {
  let component: Comp707Component;
  let fixture: ComponentFixture<Comp707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
