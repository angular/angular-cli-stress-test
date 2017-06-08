/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4397Component } from './comp-4397.component';

describe('Comp4397Component', () => {
  let component: Comp4397Component;
  let fixture: ComponentFixture<Comp4397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
