/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1867Component } from './comp-1867.component';

describe('Comp1867Component', () => {
  let component: Comp1867Component;
  let fixture: ComponentFixture<Comp1867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
