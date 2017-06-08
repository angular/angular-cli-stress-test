/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4964Component } from './comp-4964.component';

describe('Comp4964Component', () => {
  let component: Comp4964Component;
  let fixture: ComponentFixture<Comp4964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
