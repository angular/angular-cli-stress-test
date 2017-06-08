/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1487Component } from './comp-1487.component';

describe('Comp1487Component', () => {
  let component: Comp1487Component;
  let fixture: ComponentFixture<Comp1487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
