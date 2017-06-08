/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1496Component } from './comp-1496.component';

describe('Comp1496Component', () => {
  let component: Comp1496Component;
  let fixture: ComponentFixture<Comp1496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
