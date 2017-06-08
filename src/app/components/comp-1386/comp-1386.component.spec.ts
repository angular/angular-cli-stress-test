/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1386Component } from './comp-1386.component';

describe('Comp1386Component', () => {
  let component: Comp1386Component;
  let fixture: ComponentFixture<Comp1386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
