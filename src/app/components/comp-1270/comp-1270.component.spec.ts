/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1270Component } from './comp-1270.component';

describe('Comp1270Component', () => {
  let component: Comp1270Component;
  let fixture: ComponentFixture<Comp1270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
