/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4264Component } from './comp-4264.component';

describe('Comp4264Component', () => {
  let component: Comp4264Component;
  let fixture: ComponentFixture<Comp4264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
