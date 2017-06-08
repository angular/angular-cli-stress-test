/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2854Component } from './comp-2854.component';

describe('Comp2854Component', () => {
  let component: Comp2854Component;
  let fixture: ComponentFixture<Comp2854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
