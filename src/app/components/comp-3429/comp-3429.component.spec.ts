/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3429Component } from './comp-3429.component';

describe('Comp3429Component', () => {
  let component: Comp3429Component;
  let fixture: ComponentFixture<Comp3429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
