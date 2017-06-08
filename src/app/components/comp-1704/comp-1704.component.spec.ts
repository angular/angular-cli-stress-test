/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1704Component } from './comp-1704.component';

describe('Comp1704Component', () => {
  let component: Comp1704Component;
  let fixture: ComponentFixture<Comp1704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
