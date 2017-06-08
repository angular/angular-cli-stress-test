/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1052Component } from './comp-1052.component';

describe('Comp1052Component', () => {
  let component: Comp1052Component;
  let fixture: ComponentFixture<Comp1052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
