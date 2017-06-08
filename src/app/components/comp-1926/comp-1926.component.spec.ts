/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1926Component } from './comp-1926.component';

describe('Comp1926Component', () => {
  let component: Comp1926Component;
  let fixture: ComponentFixture<Comp1926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
