/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1191Component } from './comp-1191.component';

describe('Comp1191Component', () => {
  let component: Comp1191Component;
  let fixture: ComponentFixture<Comp1191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
