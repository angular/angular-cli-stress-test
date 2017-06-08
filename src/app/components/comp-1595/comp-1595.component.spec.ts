/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1595Component } from './comp-1595.component';

describe('Comp1595Component', () => {
  let component: Comp1595Component;
  let fixture: ComponentFixture<Comp1595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
