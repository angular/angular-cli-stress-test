/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3777Component } from './comp-3777.component';

describe('Comp3777Component', () => {
  let component: Comp3777Component;
  let fixture: ComponentFixture<Comp3777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
