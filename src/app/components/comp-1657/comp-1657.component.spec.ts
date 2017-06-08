/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1657Component } from './comp-1657.component';

describe('Comp1657Component', () => {
  let component: Comp1657Component;
  let fixture: ComponentFixture<Comp1657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
