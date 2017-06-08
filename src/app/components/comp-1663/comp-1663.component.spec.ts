/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1663Component } from './comp-1663.component';

describe('Comp1663Component', () => {
  let component: Comp1663Component;
  let fixture: ComponentFixture<Comp1663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
