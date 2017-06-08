/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1414Component } from './comp-1414.component';

describe('Comp1414Component', () => {
  let component: Comp1414Component;
  let fixture: ComponentFixture<Comp1414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
