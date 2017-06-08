/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp964Component } from './comp-964.component';

describe('Comp964Component', () => {
  let component: Comp964Component;
  let fixture: ComponentFixture<Comp964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
