/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1607Component } from './comp-1607.component';

describe('Comp1607Component', () => {
  let component: Comp1607Component;
  let fixture: ComponentFixture<Comp1607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
