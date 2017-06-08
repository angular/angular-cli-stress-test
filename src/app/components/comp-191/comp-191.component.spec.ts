/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp191Component } from './comp-191.component';

describe('Comp191Component', () => {
  let component: Comp191Component;
  let fixture: ComponentFixture<Comp191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
