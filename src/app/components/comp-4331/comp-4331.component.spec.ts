/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4331Component } from './comp-4331.component';

describe('Comp4331Component', () => {
  let component: Comp4331Component;
  let fixture: ComponentFixture<Comp4331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
