/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1822Component } from './comp-1822.component';

describe('Comp1822Component', () => {
  let component: Comp1822Component;
  let fixture: ComponentFixture<Comp1822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
