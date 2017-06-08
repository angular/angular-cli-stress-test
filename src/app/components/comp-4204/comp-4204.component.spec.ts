/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4204Component } from './comp-4204.component';

describe('Comp4204Component', () => {
  let component: Comp4204Component;
  let fixture: ComponentFixture<Comp4204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
