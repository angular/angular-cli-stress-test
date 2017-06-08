/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1662Component } from './comp-1662.component';

describe('Comp1662Component', () => {
  let component: Comp1662Component;
  let fixture: ComponentFixture<Comp1662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
