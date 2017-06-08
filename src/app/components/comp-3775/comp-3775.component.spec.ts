/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3775Component } from './comp-3775.component';

describe('Comp3775Component', () => {
  let component: Comp3775Component;
  let fixture: ComponentFixture<Comp3775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
