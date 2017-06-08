/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1378Component } from './comp-1378.component';

describe('Comp1378Component', () => {
  let component: Comp1378Component;
  let fixture: ComponentFixture<Comp1378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
