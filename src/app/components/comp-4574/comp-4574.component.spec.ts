/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4574Component } from './comp-4574.component';

describe('Comp4574Component', () => {
  let component: Comp4574Component;
  let fixture: ComponentFixture<Comp4574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
