/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1751Component } from './comp-1751.component';

describe('Comp1751Component', () => {
  let component: Comp1751Component;
  let fixture: ComponentFixture<Comp1751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
