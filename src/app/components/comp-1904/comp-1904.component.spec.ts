/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1904Component } from './comp-1904.component';

describe('Comp1904Component', () => {
  let component: Comp1904Component;
  let fixture: ComponentFixture<Comp1904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
