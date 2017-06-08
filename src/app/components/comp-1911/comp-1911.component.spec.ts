/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1911Component } from './comp-1911.component';

describe('Comp1911Component', () => {
  let component: Comp1911Component;
  let fixture: ComponentFixture<Comp1911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
