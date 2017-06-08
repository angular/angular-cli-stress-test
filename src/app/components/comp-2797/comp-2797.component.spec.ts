/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2797Component } from './comp-2797.component';

describe('Comp2797Component', () => {
  let component: Comp2797Component;
  let fixture: ComponentFixture<Comp2797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
