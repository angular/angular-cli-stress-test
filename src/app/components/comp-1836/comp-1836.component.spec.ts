/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1836Component } from './comp-1836.component';

describe('Comp1836Component', () => {
  let component: Comp1836Component;
  let fixture: ComponentFixture<Comp1836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
