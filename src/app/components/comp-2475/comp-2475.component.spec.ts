/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2475Component } from './comp-2475.component';

describe('Comp2475Component', () => {
  let component: Comp2475Component;
  let fixture: ComponentFixture<Comp2475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
