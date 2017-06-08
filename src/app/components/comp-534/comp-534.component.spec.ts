/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp534Component } from './comp-534.component';

describe('Comp534Component', () => {
  let component: Comp534Component;
  let fixture: ComponentFixture<Comp534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
