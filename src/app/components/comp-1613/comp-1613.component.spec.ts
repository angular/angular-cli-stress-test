/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1613Component } from './comp-1613.component';

describe('Comp1613Component', () => {
  let component: Comp1613Component;
  let fixture: ComponentFixture<Comp1613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
