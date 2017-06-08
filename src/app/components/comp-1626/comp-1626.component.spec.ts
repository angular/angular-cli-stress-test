/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1626Component } from './comp-1626.component';

describe('Comp1626Component', () => {
  let component: Comp1626Component;
  let fixture: ComponentFixture<Comp1626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
