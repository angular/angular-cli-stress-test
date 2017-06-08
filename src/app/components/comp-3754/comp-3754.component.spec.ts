/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3754Component } from './comp-3754.component';

describe('Comp3754Component', () => {
  let component: Comp3754Component;
  let fixture: ComponentFixture<Comp3754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
