/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1434Component } from './comp-1434.component';

describe('Comp1434Component', () => {
  let component: Comp1434Component;
  let fixture: ComponentFixture<Comp1434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
