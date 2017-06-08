/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2957Component } from './comp-2957.component';

describe('Comp2957Component', () => {
  let component: Comp2957Component;
  let fixture: ComponentFixture<Comp2957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
