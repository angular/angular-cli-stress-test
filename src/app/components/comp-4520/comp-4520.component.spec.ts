/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4520Component } from './comp-4520.component';

describe('Comp4520Component', () => {
  let component: Comp4520Component;
  let fixture: ComponentFixture<Comp4520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
