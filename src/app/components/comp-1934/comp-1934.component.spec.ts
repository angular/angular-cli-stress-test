/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1934Component } from './comp-1934.component';

describe('Comp1934Component', () => {
  let component: Comp1934Component;
  let fixture: ComponentFixture<Comp1934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
