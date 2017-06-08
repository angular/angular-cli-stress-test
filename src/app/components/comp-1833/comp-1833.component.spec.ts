/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1833Component } from './comp-1833.component';

describe('Comp1833Component', () => {
  let component: Comp1833Component;
  let fixture: ComponentFixture<Comp1833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
