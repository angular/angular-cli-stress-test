/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4126Component } from './comp-4126.component';

describe('Comp4126Component', () => {
  let component: Comp4126Component;
  let fixture: ComponentFixture<Comp4126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
