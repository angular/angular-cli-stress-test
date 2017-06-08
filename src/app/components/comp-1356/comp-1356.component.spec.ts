/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1356Component } from './comp-1356.component';

describe('Comp1356Component', () => {
  let component: Comp1356Component;
  let fixture: ComponentFixture<Comp1356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
