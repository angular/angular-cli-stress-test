/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp84Component } from './comp-84.component';

describe('Comp84Component', () => {
  let component: Comp84Component;
  let fixture: ComponentFixture<Comp84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
