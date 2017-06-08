/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1910Component } from './comp-1910.component';

describe('Comp1910Component', () => {
  let component: Comp1910Component;
  let fixture: ComponentFixture<Comp1910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
