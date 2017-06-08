/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2126Component } from './comp-2126.component';

describe('Comp2126Component', () => {
  let component: Comp2126Component;
  let fixture: ComponentFixture<Comp2126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
