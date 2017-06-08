/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1917Component } from './comp-1917.component';

describe('Comp1917Component', () => {
  let component: Comp1917Component;
  let fixture: ComponentFixture<Comp1917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
