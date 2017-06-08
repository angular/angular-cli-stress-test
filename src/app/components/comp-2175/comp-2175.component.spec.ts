/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2175Component } from './comp-2175.component';

describe('Comp2175Component', () => {
  let component: Comp2175Component;
  let fixture: ComponentFixture<Comp2175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
