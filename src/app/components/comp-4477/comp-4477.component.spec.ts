/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4477Component } from './comp-4477.component';

describe('Comp4477Component', () => {
  let component: Comp4477Component;
  let fixture: ComponentFixture<Comp4477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
