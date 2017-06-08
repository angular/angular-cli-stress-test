/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3801Component } from './comp-3801.component';

describe('Comp3801Component', () => {
  let component: Comp3801Component;
  let fixture: ComponentFixture<Comp3801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
