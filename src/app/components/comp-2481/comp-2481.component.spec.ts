/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2481Component } from './comp-2481.component';

describe('Comp2481Component', () => {
  let component: Comp2481Component;
  let fixture: ComponentFixture<Comp2481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
