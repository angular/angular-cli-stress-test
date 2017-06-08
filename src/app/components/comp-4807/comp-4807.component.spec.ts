/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4807Component } from './comp-4807.component';

describe('Comp4807Component', () => {
  let component: Comp4807Component;
  let fixture: ComponentFixture<Comp4807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
