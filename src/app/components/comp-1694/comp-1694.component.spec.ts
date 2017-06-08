/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1694Component } from './comp-1694.component';

describe('Comp1694Component', () => {
  let component: Comp1694Component;
  let fixture: ComponentFixture<Comp1694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
