/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4391Component } from './comp-4391.component';

describe('Comp4391Component', () => {
  let component: Comp4391Component;
  let fixture: ComponentFixture<Comp4391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
