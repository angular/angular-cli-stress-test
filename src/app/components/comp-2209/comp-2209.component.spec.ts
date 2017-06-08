/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2209Component } from './comp-2209.component';

describe('Comp2209Component', () => {
  let component: Comp2209Component;
  let fixture: ComponentFixture<Comp2209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
