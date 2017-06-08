/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1420Component } from './comp-1420.component';

describe('Comp1420Component', () => {
  let component: Comp1420Component;
  let fixture: ComponentFixture<Comp1420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
