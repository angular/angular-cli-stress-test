/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2807Component } from './comp-2807.component';

describe('Comp2807Component', () => {
  let component: Comp2807Component;
  let fixture: ComponentFixture<Comp2807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
