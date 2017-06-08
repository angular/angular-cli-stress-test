/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1797Component } from './comp-1797.component';

describe('Comp1797Component', () => {
  let component: Comp1797Component;
  let fixture: ComponentFixture<Comp1797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
