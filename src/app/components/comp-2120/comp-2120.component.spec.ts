/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2120Component } from './comp-2120.component';

describe('Comp2120Component', () => {
  let component: Comp2120Component;
  let fixture: ComponentFixture<Comp2120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
