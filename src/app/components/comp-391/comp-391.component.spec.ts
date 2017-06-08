/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp391Component } from './comp-391.component';

describe('Comp391Component', () => {
  let component: Comp391Component;
  let fixture: ComponentFixture<Comp391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
