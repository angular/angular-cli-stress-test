/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2292Component } from './comp-2292.component';

describe('Comp2292Component', () => {
  let component: Comp2292Component;
  let fixture: ComponentFixture<Comp2292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
