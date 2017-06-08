/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4962Component } from './comp-4962.component';

describe('Comp4962Component', () => {
  let component: Comp4962Component;
  let fixture: ComponentFixture<Comp4962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
