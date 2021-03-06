/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1179Component } from './comp-1179.component';

describe('Comp1179Component', () => {
  let component: Comp1179Component;
  let fixture: ComponentFixture<Comp1179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
