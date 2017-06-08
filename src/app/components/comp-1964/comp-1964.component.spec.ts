/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1964Component } from './comp-1964.component';

describe('Comp1964Component', () => {
  let component: Comp1964Component;
  let fixture: ComponentFixture<Comp1964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
