/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1882Component } from './comp-1882.component';

describe('Comp1882Component', () => {
  let component: Comp1882Component;
  let fixture: ComponentFixture<Comp1882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
