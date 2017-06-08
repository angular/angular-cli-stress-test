/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp204Component } from './comp-204.component';

describe('Comp204Component', () => {
  let component: Comp204Component;
  let fixture: ComponentFixture<Comp204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
