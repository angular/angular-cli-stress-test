/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1277Component } from './comp-1277.component';

describe('Comp1277Component', () => {
  let component: Comp1277Component;
  let fixture: ComponentFixture<Comp1277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
