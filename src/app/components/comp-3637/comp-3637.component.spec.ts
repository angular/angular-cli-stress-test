/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3637Component } from './comp-3637.component';

describe('Comp3637Component', () => {
  let component: Comp3637Component;
  let fixture: ComponentFixture<Comp3637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
