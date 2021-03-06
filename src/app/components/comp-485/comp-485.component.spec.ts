/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp485Component } from './comp-485.component';

describe('Comp485Component', () => {
  let component: Comp485Component;
  let fixture: ComponentFixture<Comp485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
