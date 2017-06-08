/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3795Component } from './comp-3795.component';

describe('Comp3795Component', () => {
  let component: Comp3795Component;
  let fixture: ComponentFixture<Comp3795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
