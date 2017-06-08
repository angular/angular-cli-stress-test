/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1951Component } from './comp-1951.component';

describe('Comp1951Component', () => {
  let component: Comp1951Component;
  let fixture: ComponentFixture<Comp1951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
