/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3373Component } from './comp-3373.component';

describe('Comp3373Component', () => {
  let component: Comp3373Component;
  let fixture: ComponentFixture<Comp3373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
