/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2430Component } from './comp-2430.component';

describe('Comp2430Component', () => {
  let component: Comp2430Component;
  let fixture: ComponentFixture<Comp2430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
