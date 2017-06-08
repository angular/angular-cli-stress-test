/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3530Component } from './comp-3530.component';

describe('Comp3530Component', () => {
  let component: Comp3530Component;
  let fixture: ComponentFixture<Comp3530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
