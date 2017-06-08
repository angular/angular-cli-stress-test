/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1819Component } from './comp-1819.component';

describe('Comp1819Component', () => {
  let component: Comp1819Component;
  let fixture: ComponentFixture<Comp1819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
