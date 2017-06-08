/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3191Component } from './comp-3191.component';

describe('Comp3191Component', () => {
  let component: Comp3191Component;
  let fixture: ComponentFixture<Comp3191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
