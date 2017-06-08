/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1399Component } from './comp-1399.component';

describe('Comp1399Component', () => {
  let component: Comp1399Component;
  let fixture: ComponentFixture<Comp1399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
