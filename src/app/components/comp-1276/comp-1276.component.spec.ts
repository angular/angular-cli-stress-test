/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1276Component } from './comp-1276.component';

describe('Comp1276Component', () => {
  let component: Comp1276Component;
  let fixture: ComponentFixture<Comp1276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
