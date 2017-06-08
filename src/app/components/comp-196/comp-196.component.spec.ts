/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp196Component } from './comp-196.component';

describe('Comp196Component', () => {
  let component: Comp196Component;
  let fixture: ComponentFixture<Comp196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
