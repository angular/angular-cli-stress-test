/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3806Component } from './comp-3806.component';

describe('Comp3806Component', () => {
  let component: Comp3806Component;
  let fixture: ComponentFixture<Comp3806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
