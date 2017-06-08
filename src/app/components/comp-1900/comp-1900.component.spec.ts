/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1900Component } from './comp-1900.component';

describe('Comp1900Component', () => {
  let component: Comp1900Component;
  let fixture: ComponentFixture<Comp1900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
