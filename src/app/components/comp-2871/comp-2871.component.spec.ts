/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2871Component } from './comp-2871.component';

describe('Comp2871Component', () => {
  let component: Comp2871Component;
  let fixture: ComponentFixture<Comp2871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
