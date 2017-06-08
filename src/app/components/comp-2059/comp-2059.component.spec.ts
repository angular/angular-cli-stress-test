/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2059Component } from './comp-2059.component';

describe('Comp2059Component', () => {
  let component: Comp2059Component;
  let fixture: ComponentFixture<Comp2059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
