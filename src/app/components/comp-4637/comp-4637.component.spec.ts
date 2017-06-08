/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4637Component } from './comp-4637.component';

describe('Comp4637Component', () => {
  let component: Comp4637Component;
  let fixture: ComponentFixture<Comp4637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
