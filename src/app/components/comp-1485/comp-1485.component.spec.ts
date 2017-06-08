/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1485Component } from './comp-1485.component';

describe('Comp1485Component', () => {
  let component: Comp1485Component;
  let fixture: ComponentFixture<Comp1485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
