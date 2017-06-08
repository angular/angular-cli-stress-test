/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1644Component } from './comp-1644.component';

describe('Comp1644Component', () => {
  let component: Comp1644Component;
  let fixture: ComponentFixture<Comp1644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
