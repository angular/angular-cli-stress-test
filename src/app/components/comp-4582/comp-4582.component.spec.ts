/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4582Component } from './comp-4582.component';

describe('Comp4582Component', () => {
  let component: Comp4582Component;
  let fixture: ComponentFixture<Comp4582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
