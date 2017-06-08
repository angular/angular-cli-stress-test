/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2805Component } from './comp-2805.component';

describe('Comp2805Component', () => {
  let component: Comp2805Component;
  let fixture: ComponentFixture<Comp2805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
