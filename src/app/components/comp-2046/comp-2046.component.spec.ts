/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2046Component } from './comp-2046.component';

describe('Comp2046Component', () => {
  let component: Comp2046Component;
  let fixture: ComponentFixture<Comp2046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
