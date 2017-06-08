/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4626Component } from './comp-4626.component';

describe('Comp4626Component', () => {
  let component: Comp4626Component;
  let fixture: ComponentFixture<Comp4626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
