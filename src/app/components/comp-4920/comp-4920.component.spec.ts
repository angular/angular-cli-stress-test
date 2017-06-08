/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4920Component } from './comp-4920.component';

describe('Comp4920Component', () => {
  let component: Comp4920Component;
  let fixture: ComponentFixture<Comp4920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
