/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4909Component } from './comp-4909.component';

describe('Comp4909Component', () => {
  let component: Comp4909Component;
  let fixture: ComponentFixture<Comp4909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
