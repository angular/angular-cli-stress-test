/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp657Component } from './comp-657.component';

describe('Comp657Component', () => {
  let component: Comp657Component;
  let fixture: ComponentFixture<Comp657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
