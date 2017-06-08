/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4695Component } from './comp-4695.component';

describe('Comp4695Component', () => {
  let component: Comp4695Component;
  let fixture: ComponentFixture<Comp4695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
