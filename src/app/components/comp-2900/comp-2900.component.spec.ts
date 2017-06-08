/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2900Component } from './comp-2900.component';

describe('Comp2900Component', () => {
  let component: Comp2900Component;
  let fixture: ComponentFixture<Comp2900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
