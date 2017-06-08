/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2202Component } from './comp-2202.component';

describe('Comp2202Component', () => {
  let component: Comp2202Component;
  let fixture: ComponentFixture<Comp2202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
