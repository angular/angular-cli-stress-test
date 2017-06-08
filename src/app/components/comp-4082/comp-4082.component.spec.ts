/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4082Component } from './comp-4082.component';

describe('Comp4082Component', () => {
  let component: Comp4082Component;
  let fixture: ComponentFixture<Comp4082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
