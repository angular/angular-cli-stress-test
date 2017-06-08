/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4505Component } from './comp-4505.component';

describe('Comp4505Component', () => {
  let component: Comp4505Component;
  let fixture: ComponentFixture<Comp4505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
