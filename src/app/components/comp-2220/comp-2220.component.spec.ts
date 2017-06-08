/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2220Component } from './comp-2220.component';

describe('Comp2220Component', () => {
  let component: Comp2220Component;
  let fixture: ComponentFixture<Comp2220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
