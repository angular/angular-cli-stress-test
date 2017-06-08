/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3322Component } from './comp-3322.component';

describe('Comp3322Component', () => {
  let component: Comp3322Component;
  let fixture: ComponentFixture<Comp3322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
