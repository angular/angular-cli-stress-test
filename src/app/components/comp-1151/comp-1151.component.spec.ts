/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1151Component } from './comp-1151.component';

describe('Comp1151Component', () => {
  let component: Comp1151Component;
  let fixture: ComponentFixture<Comp1151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
