/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1070Component } from './comp-1070.component';

describe('Comp1070Component', () => {
  let component: Comp1070Component;
  let fixture: ComponentFixture<Comp1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
