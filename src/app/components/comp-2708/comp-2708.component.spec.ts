/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2708Component } from './comp-2708.component';

describe('Comp2708Component', () => {
  let component: Comp2708Component;
  let fixture: ComponentFixture<Comp2708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
