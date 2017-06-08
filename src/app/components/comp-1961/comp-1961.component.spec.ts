/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1961Component } from './comp-1961.component';

describe('Comp1961Component', () => {
  let component: Comp1961Component;
  let fixture: ComponentFixture<Comp1961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
