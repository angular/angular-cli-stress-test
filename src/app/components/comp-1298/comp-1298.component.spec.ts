/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1298Component } from './comp-1298.component';

describe('Comp1298Component', () => {
  let component: Comp1298Component;
  let fixture: ComponentFixture<Comp1298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
