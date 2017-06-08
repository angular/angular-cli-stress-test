/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1604Component } from './comp-1604.component';

describe('Comp1604Component', () => {
  let component: Comp1604Component;
  let fixture: ComponentFixture<Comp1604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
