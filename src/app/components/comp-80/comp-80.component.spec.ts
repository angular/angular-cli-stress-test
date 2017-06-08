/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp80Component } from './comp-80.component';

describe('Comp80Component', () => {
  let component: Comp80Component;
  let fixture: ComponentFixture<Comp80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
