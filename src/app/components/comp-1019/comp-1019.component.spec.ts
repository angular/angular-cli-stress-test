/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1019Component } from './comp-1019.component';

describe('Comp1019Component', () => {
  let component: Comp1019Component;
  let fixture: ComponentFixture<Comp1019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
