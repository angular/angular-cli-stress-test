/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2679Component } from './comp-2679.component';

describe('Comp2679Component', () => {
  let component: Comp2679Component;
  let fixture: ComponentFixture<Comp2679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
