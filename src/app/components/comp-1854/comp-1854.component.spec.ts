/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1854Component } from './comp-1854.component';

describe('Comp1854Component', () => {
  let component: Comp1854Component;
  let fixture: ComponentFixture<Comp1854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
