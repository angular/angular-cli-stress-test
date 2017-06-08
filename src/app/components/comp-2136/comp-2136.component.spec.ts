/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2136Component } from './comp-2136.component';

describe('Comp2136Component', () => {
  let component: Comp2136Component;
  let fixture: ComponentFixture<Comp2136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
