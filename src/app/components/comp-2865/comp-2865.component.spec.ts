/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2865Component } from './comp-2865.component';

describe('Comp2865Component', () => {
  let component: Comp2865Component;
  let fixture: ComponentFixture<Comp2865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
