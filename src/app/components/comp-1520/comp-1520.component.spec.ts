/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1520Component } from './comp-1520.component';

describe('Comp1520Component', () => {
  let component: Comp1520Component;
  let fixture: ComponentFixture<Comp1520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
