/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1284Component } from './comp-1284.component';

describe('Comp1284Component', () => {
  let component: Comp1284Component;
  let fixture: ComponentFixture<Comp1284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
