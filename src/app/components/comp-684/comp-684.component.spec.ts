/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp684Component } from './comp-684.component';

describe('Comp684Component', () => {
  let component: Comp684Component;
  let fixture: ComponentFixture<Comp684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
