/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1844Component } from './comp-1844.component';

describe('Comp1844Component', () => {
  let component: Comp1844Component;
  let fixture: ComponentFixture<Comp1844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
