/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1597Component } from './comp-1597.component';

describe('Comp1597Component', () => {
  let component: Comp1597Component;
  let fixture: ComponentFixture<Comp1597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
