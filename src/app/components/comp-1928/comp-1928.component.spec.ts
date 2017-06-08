/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1928Component } from './comp-1928.component';

describe('Comp1928Component', () => {
  let component: Comp1928Component;
  let fixture: ComponentFixture<Comp1928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
