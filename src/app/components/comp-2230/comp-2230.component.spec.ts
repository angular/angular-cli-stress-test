/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2230Component } from './comp-2230.component';

describe('Comp2230Component', () => {
  let component: Comp2230Component;
  let fixture: ComponentFixture<Comp2230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
