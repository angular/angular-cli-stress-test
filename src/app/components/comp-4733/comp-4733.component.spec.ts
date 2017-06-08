/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4733Component } from './comp-4733.component';

describe('Comp4733Component', () => {
  let component: Comp4733Component;
  let fixture: ComponentFixture<Comp4733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
