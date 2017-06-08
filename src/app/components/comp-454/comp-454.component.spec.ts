/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp454Component } from './comp-454.component';

describe('Comp454Component', () => {
  let component: Comp454Component;
  let fixture: ComponentFixture<Comp454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
