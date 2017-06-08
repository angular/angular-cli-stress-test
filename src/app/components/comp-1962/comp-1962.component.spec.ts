/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1962Component } from './comp-1962.component';

describe('Comp1962Component', () => {
  let component: Comp1962Component;
  let fixture: ComponentFixture<Comp1962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
