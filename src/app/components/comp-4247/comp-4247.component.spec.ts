/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4247Component } from './comp-4247.component';

describe('Comp4247Component', () => {
  let component: Comp4247Component;
  let fixture: ComponentFixture<Comp4247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});