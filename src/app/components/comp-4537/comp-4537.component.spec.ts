/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4537Component } from './comp-4537.component';

describe('Comp4537Component', () => {
  let component: Comp4537Component;
  let fixture: ComponentFixture<Comp4537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
