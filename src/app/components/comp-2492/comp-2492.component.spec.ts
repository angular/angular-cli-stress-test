/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2492Component } from './comp-2492.component';

describe('Comp2492Component', () => {
  let component: Comp2492Component;
  let fixture: ComponentFixture<Comp2492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
