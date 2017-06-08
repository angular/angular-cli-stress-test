/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2164Component } from './comp-2164.component';

describe('Comp2164Component', () => {
  let component: Comp2164Component;
  let fixture: ComponentFixture<Comp2164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
