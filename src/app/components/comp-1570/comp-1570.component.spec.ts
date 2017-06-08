/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1570Component } from './comp-1570.component';

describe('Comp1570Component', () => {
  let component: Comp1570Component;
  let fixture: ComponentFixture<Comp1570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
