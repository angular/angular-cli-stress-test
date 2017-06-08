/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1637Component } from './comp-1637.component';

describe('Comp1637Component', () => {
  let component: Comp1637Component;
  let fixture: ComponentFixture<Comp1637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
