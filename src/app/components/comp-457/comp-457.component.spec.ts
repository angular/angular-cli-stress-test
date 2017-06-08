/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp457Component } from './comp-457.component';

describe('Comp457Component', () => {
  let component: Comp457Component;
  let fixture: ComponentFixture<Comp457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
