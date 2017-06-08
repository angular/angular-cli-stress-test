/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2815Component } from './comp-2815.component';

describe('Comp2815Component', () => {
  let component: Comp2815Component;
  let fixture: ComponentFixture<Comp2815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
