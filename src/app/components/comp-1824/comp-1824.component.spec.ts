/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1824Component } from './comp-1824.component';

describe('Comp1824Component', () => {
  let component: Comp1824Component;
  let fixture: ComponentFixture<Comp1824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
