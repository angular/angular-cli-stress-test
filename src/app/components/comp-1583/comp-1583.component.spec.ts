/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1583Component } from './comp-1583.component';

describe('Comp1583Component', () => {
  let component: Comp1583Component;
  let fixture: ComponentFixture<Comp1583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
