/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp491Component } from './comp-491.component';

describe('Comp491Component', () => {
  let component: Comp491Component;
  let fixture: ComponentFixture<Comp491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
