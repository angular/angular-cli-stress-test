/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp883Component } from './comp-883.component';

describe('Comp883Component', () => {
  let component: Comp883Component;
  let fixture: ComponentFixture<Comp883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
