/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp646Component } from './comp-646.component';

describe('Comp646Component', () => {
  let component: Comp646Component;
  let fixture: ComponentFixture<Comp646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
