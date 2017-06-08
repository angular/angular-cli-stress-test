/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3510Component } from './comp-3510.component';

describe('Comp3510Component', () => {
  let component: Comp3510Component;
  let fixture: ComponentFixture<Comp3510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
