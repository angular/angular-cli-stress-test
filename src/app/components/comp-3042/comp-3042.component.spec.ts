/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3042Component } from './comp-3042.component';

describe('Comp3042Component', () => {
  let component: Comp3042Component;
  let fixture: ComponentFixture<Comp3042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
