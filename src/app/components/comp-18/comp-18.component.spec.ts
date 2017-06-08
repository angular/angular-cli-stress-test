/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp18Component } from './comp-18.component';

describe('Comp18Component', () => {
  let component: Comp18Component;
  let fixture: ComponentFixture<Comp18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
