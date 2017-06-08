/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1594Component } from './comp-1594.component';

describe('Comp1594Component', () => {
  let component: Comp1594Component;
  let fixture: ComponentFixture<Comp1594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
