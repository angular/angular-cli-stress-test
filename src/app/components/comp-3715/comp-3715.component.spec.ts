/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3715Component } from './comp-3715.component';

describe('Comp3715Component', () => {
  let component: Comp3715Component;
  let fixture: ComponentFixture<Comp3715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
