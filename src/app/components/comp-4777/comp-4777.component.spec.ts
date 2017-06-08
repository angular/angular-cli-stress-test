/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4777Component } from './comp-4777.component';

describe('Comp4777Component', () => {
  let component: Comp4777Component;
  let fixture: ComponentFixture<Comp4777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
