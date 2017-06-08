/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4052Component } from './comp-4052.component';

describe('Comp4052Component', () => {
  let component: Comp4052Component;
  let fixture: ComponentFixture<Comp4052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
