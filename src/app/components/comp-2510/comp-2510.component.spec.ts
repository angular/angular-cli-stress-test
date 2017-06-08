/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2510Component } from './comp-2510.component';

describe('Comp2510Component', () => {
  let component: Comp2510Component;
  let fixture: ComponentFixture<Comp2510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
