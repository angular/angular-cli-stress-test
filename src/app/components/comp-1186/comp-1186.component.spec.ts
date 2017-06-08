/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1186Component } from './comp-1186.component';

describe('Comp1186Component', () => {
  let component: Comp1186Component;
  let fixture: ComponentFixture<Comp1186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
