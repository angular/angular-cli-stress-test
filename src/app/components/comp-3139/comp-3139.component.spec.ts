/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3139Component } from './comp-3139.component';

describe('Comp3139Component', () => {
  let component: Comp3139Component;
  let fixture: ComponentFixture<Comp3139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
