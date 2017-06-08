/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1675Component } from './comp-1675.component';

describe('Comp1675Component', () => {
  let component: Comp1675Component;
  let fixture: ComponentFixture<Comp1675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
