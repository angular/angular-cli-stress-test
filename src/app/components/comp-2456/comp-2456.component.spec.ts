/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2456Component } from './comp-2456.component';

describe('Comp2456Component', () => {
  let component: Comp2456Component;
  let fixture: ComponentFixture<Comp2456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
