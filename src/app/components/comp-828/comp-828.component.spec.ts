/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp828Component } from './comp-828.component';

describe('Comp828Component', () => {
  let component: Comp828Component;
  let fixture: ComponentFixture<Comp828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
