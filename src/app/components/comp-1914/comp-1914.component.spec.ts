/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1914Component } from './comp-1914.component';

describe('Comp1914Component', () => {
  let component: Comp1914Component;
  let fixture: ComponentFixture<Comp1914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
