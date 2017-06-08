/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1213Component } from './comp-1213.component';

describe('Comp1213Component', () => {
  let component: Comp1213Component;
  let fixture: ComponentFixture<Comp1213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
