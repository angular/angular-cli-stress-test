/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1292Component } from './comp-1292.component';

describe('Comp1292Component', () => {
  let component: Comp1292Component;
  let fixture: ComponentFixture<Comp1292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
