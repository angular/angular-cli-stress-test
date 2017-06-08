/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3891Component } from './comp-3891.component';

describe('Comp3891Component', () => {
  let component: Comp3891Component;
  let fixture: ComponentFixture<Comp3891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
