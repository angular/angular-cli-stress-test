/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4521Component } from './comp-4521.component';

describe('Comp4521Component', () => {
  let component: Comp4521Component;
  let fixture: ComponentFixture<Comp4521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
