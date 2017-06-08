/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1806Component } from './comp-1806.component';

describe('Comp1806Component', () => {
  let component: Comp1806Component;
  let fixture: ComponentFixture<Comp1806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
