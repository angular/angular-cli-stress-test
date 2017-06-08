/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1661Component } from './comp-1661.component';

describe('Comp1661Component', () => {
  let component: Comp1661Component;
  let fixture: ComponentFixture<Comp1661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
