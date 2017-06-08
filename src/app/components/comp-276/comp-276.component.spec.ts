/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp276Component } from './comp-276.component';

describe('Comp276Component', () => {
  let component: Comp276Component;
  let fixture: ComponentFixture<Comp276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
