/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1472Component } from './comp-1472.component';

describe('Comp1472Component', () => {
  let component: Comp1472Component;
  let fixture: ComponentFixture<Comp1472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
