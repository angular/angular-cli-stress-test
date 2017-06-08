/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3934Component } from './comp-3934.component';

describe('Comp3934Component', () => {
  let component: Comp3934Component;
  let fixture: ComponentFixture<Comp3934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
