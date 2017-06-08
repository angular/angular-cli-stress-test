/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1383Component } from './comp-1383.component';

describe('Comp1383Component', () => {
  let component: Comp1383Component;
  let fixture: ComponentFixture<Comp1383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
