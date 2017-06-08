/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1590Component } from './comp-1590.component';

describe('Comp1590Component', () => {
  let component: Comp1590Component;
  let fixture: ComponentFixture<Comp1590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
