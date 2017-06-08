/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1802Component } from './comp-1802.component';

describe('Comp1802Component', () => {
  let component: Comp1802Component;
  let fixture: ComponentFixture<Comp1802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
