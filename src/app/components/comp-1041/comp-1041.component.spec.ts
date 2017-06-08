/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1041Component } from './comp-1041.component';

describe('Comp1041Component', () => {
  let component: Comp1041Component;
  let fixture: ComponentFixture<Comp1041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
