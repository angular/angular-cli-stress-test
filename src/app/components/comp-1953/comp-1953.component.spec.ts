/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1953Component } from './comp-1953.component';

describe('Comp1953Component', () => {
  let component: Comp1953Component;
  let fixture: ComponentFixture<Comp1953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
