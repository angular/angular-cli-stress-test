/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1282Component } from './comp-1282.component';

describe('Comp1282Component', () => {
  let component: Comp1282Component;
  let fixture: ComponentFixture<Comp1282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
