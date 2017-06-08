/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3803Component } from './comp-3803.component';

describe('Comp3803Component', () => {
  let component: Comp3803Component;
  let fixture: ComponentFixture<Comp3803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
