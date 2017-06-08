/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1437Component } from './comp-1437.component';

describe('Comp1437Component', () => {
  let component: Comp1437Component;
  let fixture: ComponentFixture<Comp1437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
