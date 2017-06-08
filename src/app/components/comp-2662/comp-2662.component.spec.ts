/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2662Component } from './comp-2662.component';

describe('Comp2662Component', () => {
  let component: Comp2662Component;
  let fixture: ComponentFixture<Comp2662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
