/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1846Component } from './comp-1846.component';

describe('Comp1846Component', () => {
  let component: Comp1846Component;
  let fixture: ComponentFixture<Comp1846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
