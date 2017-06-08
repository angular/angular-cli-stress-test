/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4575Component } from './comp-4575.component';

describe('Comp4575Component', () => {
  let component: Comp4575Component;
  let fixture: ComponentFixture<Comp4575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
