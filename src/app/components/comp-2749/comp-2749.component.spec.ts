/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2749Component } from './comp-2749.component';

describe('Comp2749Component', () => {
  let component: Comp2749Component;
  let fixture: ComponentFixture<Comp2749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
