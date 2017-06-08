/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1580Component } from './comp-1580.component';

describe('Comp1580Component', () => {
  let component: Comp1580Component;
  let fixture: ComponentFixture<Comp1580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
