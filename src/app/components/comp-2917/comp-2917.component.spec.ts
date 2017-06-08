/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2917Component } from './comp-2917.component';

describe('Comp2917Component', () => {
  let component: Comp2917Component;
  let fixture: ComponentFixture<Comp2917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
