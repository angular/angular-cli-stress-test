/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1387Component } from './comp-1387.component';

describe('Comp1387Component', () => {
  let component: Comp1387Component;
  let fixture: ComponentFixture<Comp1387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
