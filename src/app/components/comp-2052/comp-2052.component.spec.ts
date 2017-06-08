/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2052Component } from './comp-2052.component';

describe('Comp2052Component', () => {
  let component: Comp2052Component;
  let fixture: ComponentFixture<Comp2052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
