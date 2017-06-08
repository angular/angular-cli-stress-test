/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2590Component } from './comp-2590.component';

describe('Comp2590Component', () => {
  let component: Comp2590Component;
  let fixture: ComponentFixture<Comp2590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
