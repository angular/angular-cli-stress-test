/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3588Component } from './comp-3588.component';

describe('Comp3588Component', () => {
  let component: Comp3588Component;
  let fixture: ComponentFixture<Comp3588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
