/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp510Component } from './comp-510.component';

describe('Comp510Component', () => {
  let component: Comp510Component;
  let fixture: ComponentFixture<Comp510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
