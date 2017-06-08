/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2341Component } from './comp-2341.component';

describe('Comp2341Component', () => {
  let component: Comp2341Component;
  let fixture: ComponentFixture<Comp2341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
