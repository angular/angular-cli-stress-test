/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1598Component } from './comp-1598.component';

describe('Comp1598Component', () => {
  let component: Comp1598Component;
  let fixture: ComponentFixture<Comp1598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
