/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2546Component } from './comp-2546.component';

describe('Comp2546Component', () => {
  let component: Comp2546Component;
  let fixture: ComponentFixture<Comp2546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
