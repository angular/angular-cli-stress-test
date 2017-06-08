/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2097Component } from './comp-2097.component';

describe('Comp2097Component', () => {
  let component: Comp2097Component;
  let fixture: ComponentFixture<Comp2097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
