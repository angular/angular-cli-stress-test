/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1938Component } from './comp-1938.component';

describe('Comp1938Component', () => {
  let component: Comp1938Component;
  let fixture: ComponentFixture<Comp1938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
