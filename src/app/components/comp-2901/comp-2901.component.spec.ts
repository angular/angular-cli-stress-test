/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2901Component } from './comp-2901.component';

describe('Comp2901Component', () => {
  let component: Comp2901Component;
  let fixture: ComponentFixture<Comp2901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
