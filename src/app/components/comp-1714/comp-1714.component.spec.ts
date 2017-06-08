/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1714Component } from './comp-1714.component';

describe('Comp1714Component', () => {
  let component: Comp1714Component;
  let fixture: ComponentFixture<Comp1714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
