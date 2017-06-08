/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1876Component } from './comp-1876.component';

describe('Comp1876Component', () => {
  let component: Comp1876Component;
  let fixture: ComponentFixture<Comp1876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
