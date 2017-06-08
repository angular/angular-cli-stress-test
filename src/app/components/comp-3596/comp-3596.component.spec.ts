/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3596Component } from './comp-3596.component';

describe('Comp3596Component', () => {
  let component: Comp3596Component;
  let fixture: ComponentFixture<Comp3596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
