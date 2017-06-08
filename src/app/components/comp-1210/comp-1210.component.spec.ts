/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1210Component } from './comp-1210.component';

describe('Comp1210Component', () => {
  let component: Comp1210Component;
  let fixture: ComponentFixture<Comp1210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
