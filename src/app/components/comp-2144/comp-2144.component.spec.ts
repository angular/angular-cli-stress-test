/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2144Component } from './comp-2144.component';

describe('Comp2144Component', () => {
  let component: Comp2144Component;
  let fixture: ComponentFixture<Comp2144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
