/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4284Component } from './comp-4284.component';

describe('Comp4284Component', () => {
  let component: Comp4284Component;
  let fixture: ComponentFixture<Comp4284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
