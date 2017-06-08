/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2165Component } from './comp-2165.component';

describe('Comp2165Component', () => {
  let component: Comp2165Component;
  let fixture: ComponentFixture<Comp2165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
