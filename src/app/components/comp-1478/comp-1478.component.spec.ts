/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1478Component } from './comp-1478.component';

describe('Comp1478Component', () => {
  let component: Comp1478Component;
  let fixture: ComponentFixture<Comp1478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
