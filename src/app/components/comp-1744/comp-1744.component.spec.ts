/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1744Component } from './comp-1744.component';

describe('Comp1744Component', () => {
  let component: Comp1744Component;
  let fixture: ComponentFixture<Comp1744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
