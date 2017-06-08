/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1781Component } from './comp-1781.component';

describe('Comp1781Component', () => {
  let component: Comp1781Component;
  let fixture: ComponentFixture<Comp1781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
