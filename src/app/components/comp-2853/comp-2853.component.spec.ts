/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2853Component } from './comp-2853.component';

describe('Comp2853Component', () => {
  let component: Comp2853Component;
  let fixture: ComponentFixture<Comp2853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
