/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3113Component } from './comp-3113.component';

describe('Comp3113Component', () => {
  let component: Comp3113Component;
  let fixture: ComponentFixture<Comp3113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
