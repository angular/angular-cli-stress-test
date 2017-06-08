/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4833Component } from './comp-4833.component';

describe('Comp4833Component', () => {
  let component: Comp4833Component;
  let fixture: ComponentFixture<Comp4833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
