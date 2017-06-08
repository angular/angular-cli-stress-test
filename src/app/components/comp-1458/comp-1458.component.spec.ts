/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1458Component } from './comp-1458.component';

describe('Comp1458Component', () => {
  let component: Comp1458Component;
  let fixture: ComponentFixture<Comp1458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
