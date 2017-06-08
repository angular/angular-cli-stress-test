/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4611Component } from './comp-4611.component';

describe('Comp4611Component', () => {
  let component: Comp4611Component;
  let fixture: ComponentFixture<Comp4611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
