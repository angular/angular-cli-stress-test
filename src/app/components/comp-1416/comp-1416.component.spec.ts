/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1416Component } from './comp-1416.component';

describe('Comp1416Component', () => {
  let component: Comp1416Component;
  let fixture: ComponentFixture<Comp1416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
