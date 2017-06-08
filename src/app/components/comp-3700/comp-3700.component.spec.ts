/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3700Component } from './comp-3700.component';

describe('Comp3700Component', () => {
  let component: Comp3700Component;
  let fixture: ComponentFixture<Comp3700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
