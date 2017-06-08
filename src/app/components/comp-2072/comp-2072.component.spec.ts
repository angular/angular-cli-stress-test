/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2072Component } from './comp-2072.component';

describe('Comp2072Component', () => {
  let component: Comp2072Component;
  let fixture: ComponentFixture<Comp2072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
