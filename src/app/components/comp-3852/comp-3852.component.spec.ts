/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3852Component } from './comp-3852.component';

describe('Comp3852Component', () => {
  let component: Comp3852Component;
  let fixture: ComponentFixture<Comp3852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
