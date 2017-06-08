/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2745Component } from './comp-2745.component';

describe('Comp2745Component', () => {
  let component: Comp2745Component;
  let fixture: ComponentFixture<Comp2745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
