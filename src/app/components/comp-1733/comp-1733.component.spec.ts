/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1733Component } from './comp-1733.component';

describe('Comp1733Component', () => {
  let component: Comp1733Component;
  let fixture: ComponentFixture<Comp1733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
