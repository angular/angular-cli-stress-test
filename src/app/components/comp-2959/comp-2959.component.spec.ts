/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2959Component } from './comp-2959.component';

describe('Comp2959Component', () => {
  let component: Comp2959Component;
  let fixture: ComponentFixture<Comp2959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
