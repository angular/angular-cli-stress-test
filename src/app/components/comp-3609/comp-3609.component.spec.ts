/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3609Component } from './comp-3609.component';

describe('Comp3609Component', () => {
  let component: Comp3609Component;
  let fixture: ComponentFixture<Comp3609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
