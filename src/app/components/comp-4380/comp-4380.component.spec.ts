/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4380Component } from './comp-4380.component';

describe('Comp4380Component', () => {
  let component: Comp4380Component;
  let fixture: ComponentFixture<Comp4380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
