/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2301Component } from './comp-2301.component';

describe('Comp2301Component', () => {
  let component: Comp2301Component;
  let fixture: ComponentFixture<Comp2301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
