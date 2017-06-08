/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3088Component } from './comp-3088.component';

describe('Comp3088Component', () => {
  let component: Comp3088Component;
  let fixture: ComponentFixture<Comp3088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
