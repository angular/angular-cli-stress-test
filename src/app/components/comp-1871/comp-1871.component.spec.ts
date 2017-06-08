/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1871Component } from './comp-1871.component';

describe('Comp1871Component', () => {
  let component: Comp1871Component;
  let fixture: ComponentFixture<Comp1871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
