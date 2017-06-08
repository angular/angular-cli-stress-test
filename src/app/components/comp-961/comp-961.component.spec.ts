/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp961Component } from './comp-961.component';

describe('Comp961Component', () => {
  let component: Comp961Component;
  let fixture: ComponentFixture<Comp961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
