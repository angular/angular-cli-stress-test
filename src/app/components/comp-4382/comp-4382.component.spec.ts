/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4382Component } from './comp-4382.component';

describe('Comp4382Component', () => {
  let component: Comp4382Component;
  let fixture: ComponentFixture<Comp4382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
