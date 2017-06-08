/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3828Component } from './comp-3828.component';

describe('Comp3828Component', () => {
  let component: Comp3828Component;
  let fixture: ComponentFixture<Comp3828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
