/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2943Component } from './comp-2943.component';

describe('Comp2943Component', () => {
  let component: Comp2943Component;
  let fixture: ComponentFixture<Comp2943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
