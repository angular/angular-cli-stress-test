/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2817Component } from './comp-2817.component';

describe('Comp2817Component', () => {
  let component: Comp2817Component;
  let fixture: ComponentFixture<Comp2817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});