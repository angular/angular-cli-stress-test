/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1852Component } from './comp-1852.component';

describe('Comp1852Component', () => {
  let component: Comp1852Component;
  let fixture: ComponentFixture<Comp1852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
