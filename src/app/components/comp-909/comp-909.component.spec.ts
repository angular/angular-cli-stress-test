/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp909Component } from './comp-909.component';

describe('Comp909Component', () => {
  let component: Comp909Component;
  let fixture: ComponentFixture<Comp909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
