/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3678Component } from './comp-3678.component';

describe('Comp3678Component', () => {
  let component: Comp3678Component;
  let fixture: ComponentFixture<Comp3678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
