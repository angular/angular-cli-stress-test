/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3662Component } from './comp-3662.component';

describe('Comp3662Component', () => {
  let component: Comp3662Component;
  let fixture: ComponentFixture<Comp3662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
