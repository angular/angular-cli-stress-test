/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp622Component } from './comp-622.component';

describe('Comp622Component', () => {
  let component: Comp622Component;
  let fixture: ComponentFixture<Comp622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
