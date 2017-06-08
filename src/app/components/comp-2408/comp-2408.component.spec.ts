/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2408Component } from './comp-2408.component';

describe('Comp2408Component', () => {
  let component: Comp2408Component;
  let fixture: ComponentFixture<Comp2408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
