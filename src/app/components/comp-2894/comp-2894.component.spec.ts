/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2894Component } from './comp-2894.component';

describe('Comp2894Component', () => {
  let component: Comp2894Component;
  let fixture: ComponentFixture<Comp2894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
