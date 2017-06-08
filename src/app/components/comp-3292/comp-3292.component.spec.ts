/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3292Component } from './comp-3292.component';

describe('Comp3292Component', () => {
  let component: Comp3292Component;
  let fixture: ComponentFixture<Comp3292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
