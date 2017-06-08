/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1047Component } from './comp-1047.component';

describe('Comp1047Component', () => {
  let component: Comp1047Component;
  let fixture: ComponentFixture<Comp1047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
