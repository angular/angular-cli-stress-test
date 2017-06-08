/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4767Component } from './comp-4767.component';

describe('Comp4767Component', () => {
  let component: Comp4767Component;
  let fixture: ComponentFixture<Comp4767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
