/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp650Component } from './comp-650.component';

describe('Comp650Component', () => {
  let component: Comp650Component;
  let fixture: ComponentFixture<Comp650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
