/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1886Component } from './comp-1886.component';

describe('Comp1886Component', () => {
  let component: Comp1886Component;
  let fixture: ComponentFixture<Comp1886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
