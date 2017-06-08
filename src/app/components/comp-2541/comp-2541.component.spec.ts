/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2541Component } from './comp-2541.component';

describe('Comp2541Component', () => {
  let component: Comp2541Component;
  let fixture: ComponentFixture<Comp2541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
