/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3668Component } from './comp-3668.component';

describe('Comp3668Component', () => {
  let component: Comp3668Component;
  let fixture: ComponentFixture<Comp3668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
