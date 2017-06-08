/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1219Component } from './comp-1219.component';

describe('Comp1219Component', () => {
  let component: Comp1219Component;
  let fixture: ComponentFixture<Comp1219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
