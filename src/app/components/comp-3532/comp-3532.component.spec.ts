/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3532Component } from './comp-3532.component';

describe('Comp3532Component', () => {
  let component: Comp3532Component;
  let fixture: ComponentFixture<Comp3532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
