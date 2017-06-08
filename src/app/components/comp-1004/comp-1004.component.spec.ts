/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1004Component } from './comp-1004.component';

describe('Comp1004Component', () => {
  let component: Comp1004Component;
  let fixture: ComponentFixture<Comp1004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
