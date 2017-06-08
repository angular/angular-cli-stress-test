/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2274Component } from './comp-2274.component';

describe('Comp2274Component', () => {
  let component: Comp2274Component;
  let fixture: ComponentFixture<Comp2274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
