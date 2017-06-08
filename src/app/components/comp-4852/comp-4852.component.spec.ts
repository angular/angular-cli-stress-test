/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4852Component } from './comp-4852.component';

describe('Comp4852Component', () => {
  let component: Comp4852Component;
  let fixture: ComponentFixture<Comp4852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
