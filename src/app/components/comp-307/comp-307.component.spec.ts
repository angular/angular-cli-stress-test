/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp307Component } from './comp-307.component';

describe('Comp307Component', () => {
  let component: Comp307Component;
  let fixture: ComponentFixture<Comp307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
