/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp341Component } from './comp-341.component';

describe('Comp341Component', () => {
  let component: Comp341Component;
  let fixture: ComponentFixture<Comp341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
