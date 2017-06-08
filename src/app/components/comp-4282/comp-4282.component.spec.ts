/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4282Component } from './comp-4282.component';

describe('Comp4282Component', () => {
  let component: Comp4282Component;
  let fixture: ComponentFixture<Comp4282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
