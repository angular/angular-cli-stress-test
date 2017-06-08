/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2891Component } from './comp-2891.component';

describe('Comp2891Component', () => {
  let component: Comp2891Component;
  let fixture: ComponentFixture<Comp2891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
