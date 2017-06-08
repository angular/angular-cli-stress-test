/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3707Component } from './comp-3707.component';

describe('Comp3707Component', () => {
  let component: Comp3707Component;
  let fixture: ComponentFixture<Comp3707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
