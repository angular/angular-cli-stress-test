/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1247Component } from './comp-1247.component';

describe('Comp1247Component', () => {
  let component: Comp1247Component;
  let fixture: ComponentFixture<Comp1247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
