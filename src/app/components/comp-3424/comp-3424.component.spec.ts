/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3424Component } from './comp-3424.component';

describe('Comp3424Component', () => {
  let component: Comp3424Component;
  let fixture: ComponentFixture<Comp3424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
