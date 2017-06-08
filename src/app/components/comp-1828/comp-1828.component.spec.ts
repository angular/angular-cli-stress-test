/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1828Component } from './comp-1828.component';

describe('Comp1828Component', () => {
  let component: Comp1828Component;
  let fixture: ComponentFixture<Comp1828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
