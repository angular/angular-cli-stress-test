/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2920Component } from './comp-2920.component';

describe('Comp2920Component', () => {
  let component: Comp2920Component;
  let fixture: ComponentFixture<Comp2920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
