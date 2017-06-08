/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1465Component } from './comp-1465.component';

describe('Comp1465Component', () => {
  let component: Comp1465Component;
  let fixture: ComponentFixture<Comp1465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
