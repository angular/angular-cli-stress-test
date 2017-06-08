/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp920Component } from './comp-920.component';

describe('Comp920Component', () => {
  let component: Comp920Component;
  let fixture: ComponentFixture<Comp920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
