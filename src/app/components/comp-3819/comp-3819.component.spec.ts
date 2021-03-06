/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3819Component } from './comp-3819.component';

describe('Comp3819Component', () => {
  let component: Comp3819Component;
  let fixture: ComponentFixture<Comp3819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
