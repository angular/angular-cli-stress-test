/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3658Component } from './comp-3658.component';

describe('Comp3658Component', () => {
  let component: Comp3658Component;
  let fixture: ComponentFixture<Comp3658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
