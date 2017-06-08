/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp751Component } from './comp-751.component';

describe('Comp751Component', () => {
  let component: Comp751Component;
  let fixture: ComponentFixture<Comp751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
