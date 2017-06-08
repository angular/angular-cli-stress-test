/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3082Component } from './comp-3082.component';

describe('Comp3082Component', () => {
  let component: Comp3082Component;
  let fixture: ComponentFixture<Comp3082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
