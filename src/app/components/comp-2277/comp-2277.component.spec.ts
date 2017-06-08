/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2277Component } from './comp-2277.component';

describe('Comp2277Component', () => {
  let component: Comp2277Component;
  let fixture: ComponentFixture<Comp2277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
