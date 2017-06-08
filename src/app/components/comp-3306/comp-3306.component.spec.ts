/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3306Component } from './comp-3306.component';

describe('Comp3306Component', () => {
  let component: Comp3306Component;
  let fixture: ComponentFixture<Comp3306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
