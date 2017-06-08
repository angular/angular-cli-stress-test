/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp238Component } from './comp-238.component';

describe('Comp238Component', () => {
  let component: Comp238Component;
  let fixture: ComponentFixture<Comp238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
