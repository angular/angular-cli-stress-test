/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1765Component } from './comp-1765.component';

describe('Comp1765Component', () => {
  let component: Comp1765Component;
  let fixture: ComponentFixture<Comp1765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
