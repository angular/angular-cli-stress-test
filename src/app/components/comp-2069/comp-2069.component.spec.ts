/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2069Component } from './comp-2069.component';

describe('Comp2069Component', () => {
  let component: Comp2069Component;
  let fixture: ComponentFixture<Comp2069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
