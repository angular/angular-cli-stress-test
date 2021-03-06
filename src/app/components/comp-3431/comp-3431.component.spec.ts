/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3431Component } from './comp-3431.component';

describe('Comp3431Component', () => {
  let component: Comp3431Component;
  let fixture: ComponentFixture<Comp3431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
