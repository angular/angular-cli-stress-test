/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1408Component } from './comp-1408.component';

describe('Comp1408Component', () => {
  let component: Comp1408Component;
  let fixture: ComponentFixture<Comp1408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
