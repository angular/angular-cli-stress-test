/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4896Component } from './comp-4896.component';

describe('Comp4896Component', () => {
  let component: Comp4896Component;
  let fixture: ComponentFixture<Comp4896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
