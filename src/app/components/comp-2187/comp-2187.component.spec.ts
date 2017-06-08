/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2187Component } from './comp-2187.component';

describe('Comp2187Component', () => {
  let component: Comp2187Component;
  let fixture: ComponentFixture<Comp2187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
