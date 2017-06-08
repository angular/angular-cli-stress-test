/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1818Component } from './comp-1818.component';

describe('Comp1818Component', () => {
  let component: Comp1818Component;
  let fixture: ComponentFixture<Comp1818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
