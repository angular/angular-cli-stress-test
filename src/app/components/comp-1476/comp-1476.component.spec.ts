/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1476Component } from './comp-1476.component';

describe('Comp1476Component', () => {
  let component: Comp1476Component;
  let fixture: ComponentFixture<Comp1476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
