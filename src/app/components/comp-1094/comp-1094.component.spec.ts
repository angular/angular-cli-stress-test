/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1094Component } from './comp-1094.component';

describe('Comp1094Component', () => {
  let component: Comp1094Component;
  let fixture: ComponentFixture<Comp1094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
