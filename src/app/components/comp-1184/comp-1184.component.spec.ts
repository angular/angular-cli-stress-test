/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1184Component } from './comp-1184.component';

describe('Comp1184Component', () => {
  let component: Comp1184Component;
  let fixture: ComponentFixture<Comp1184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
