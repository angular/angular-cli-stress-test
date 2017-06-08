/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3382Component } from './comp-3382.component';

describe('Comp3382Component', () => {
  let component: Comp3382Component;
  let fixture: ComponentFixture<Comp3382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
