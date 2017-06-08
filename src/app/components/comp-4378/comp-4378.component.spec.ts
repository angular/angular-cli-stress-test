/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4378Component } from './comp-4378.component';

describe('Comp4378Component', () => {
  let component: Comp4378Component;
  let fixture: ComponentFixture<Comp4378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
