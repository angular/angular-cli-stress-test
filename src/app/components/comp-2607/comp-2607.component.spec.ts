/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2607Component } from './comp-2607.component';

describe('Comp2607Component', () => {
  let component: Comp2607Component;
  let fixture: ComponentFixture<Comp2607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
