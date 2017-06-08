/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp338Component } from './comp-338.component';

describe('Comp338Component', () => {
  let component: Comp338Component;
  let fixture: ComponentFixture<Comp338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
