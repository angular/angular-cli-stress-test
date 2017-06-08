/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4322Component } from './comp-4322.component';

describe('Comp4322Component', () => {
  let component: Comp4322Component;
  let fixture: ComponentFixture<Comp4322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
