/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3321Component } from './comp-3321.component';

describe('Comp3321Component', () => {
  let component: Comp3321Component;
  let fixture: ComponentFixture<Comp3321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
