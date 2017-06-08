/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2447Component } from './comp-2447.component';

describe('Comp2447Component', () => {
  let component: Comp2447Component;
  let fixture: ComponentFixture<Comp2447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
