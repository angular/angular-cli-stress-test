/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1909Component } from './comp-1909.component';

describe('Comp1909Component', () => {
  let component: Comp1909Component;
  let fixture: ComponentFixture<Comp1909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
