/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2928Component } from './comp-2928.component';

describe('Comp2928Component', () => {
  let component: Comp2928Component;
  let fixture: ComponentFixture<Comp2928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
