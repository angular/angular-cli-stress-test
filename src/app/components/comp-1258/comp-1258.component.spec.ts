/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1258Component } from './comp-1258.component';

describe('Comp1258Component', () => {
  let component: Comp1258Component;
  let fixture: ComponentFixture<Comp1258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
