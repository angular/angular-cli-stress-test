/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4954Component } from './comp-4954.component';

describe('Comp4954Component', () => {
  let component: Comp4954Component;
  let fixture: ComponentFixture<Comp4954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
