/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3607Component } from './comp-3607.component';

describe('Comp3607Component', () => {
  let component: Comp3607Component;
  let fixture: ComponentFixture<Comp3607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
