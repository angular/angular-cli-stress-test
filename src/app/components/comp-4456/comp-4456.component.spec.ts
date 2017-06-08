/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4456Component } from './comp-4456.component';

describe('Comp4456Component', () => {
  let component: Comp4456Component;
  let fixture: ComponentFixture<Comp4456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
