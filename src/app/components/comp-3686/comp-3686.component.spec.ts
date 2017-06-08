/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3686Component } from './comp-3686.component';

describe('Comp3686Component', () => {
  let component: Comp3686Component;
  let fixture: ComponentFixture<Comp3686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
