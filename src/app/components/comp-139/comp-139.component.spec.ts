/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp139Component } from './comp-139.component';

describe('Comp139Component', () => {
  let component: Comp139Component;
  let fixture: ComponentFixture<Comp139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
