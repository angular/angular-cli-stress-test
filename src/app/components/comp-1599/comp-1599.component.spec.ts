/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1599Component } from './comp-1599.component';

describe('Comp1599Component', () => {
  let component: Comp1599Component;
  let fixture: ComponentFixture<Comp1599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
