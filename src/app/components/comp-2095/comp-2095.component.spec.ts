/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2095Component } from './comp-2095.component';

describe('Comp2095Component', () => {
  let component: Comp2095Component;
  let fixture: ComponentFixture<Comp2095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
