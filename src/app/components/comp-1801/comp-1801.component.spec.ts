/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1801Component } from './comp-1801.component';

describe('Comp1801Component', () => {
  let component: Comp1801Component;
  let fixture: ComponentFixture<Comp1801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
