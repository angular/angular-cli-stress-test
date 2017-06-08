/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2799Component } from './comp-2799.component';

describe('Comp2799Component', () => {
  let component: Comp2799Component;
  let fixture: ComponentFixture<Comp2799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
