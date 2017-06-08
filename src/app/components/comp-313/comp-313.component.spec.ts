/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp313Component } from './comp-313.component';

describe('Comp313Component', () => {
  let component: Comp313Component;
  let fixture: ComponentFixture<Comp313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
