/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2579Component } from './comp-2579.component';

describe('Comp2579Component', () => {
  let component: Comp2579Component;
  let fixture: ComponentFixture<Comp2579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
