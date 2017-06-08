/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3264Component } from './comp-3264.component';

describe('Comp3264Component', () => {
  let component: Comp3264Component;
  let fixture: ComponentFixture<Comp3264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
