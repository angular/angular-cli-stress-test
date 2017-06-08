/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2882Component } from './comp-2882.component';

describe('Comp2882Component', () => {
  let component: Comp2882Component;
  let fixture: ComponentFixture<Comp2882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
