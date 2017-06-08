/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4364Component } from './comp-4364.component';

describe('Comp4364Component', () => {
  let component: Comp4364Component;
  let fixture: ComponentFixture<Comp4364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
