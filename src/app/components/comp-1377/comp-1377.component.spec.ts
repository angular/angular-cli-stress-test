/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1377Component } from './comp-1377.component';

describe('Comp1377Component', () => {
  let component: Comp1377Component;
  let fixture: ComponentFixture<Comp1377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
