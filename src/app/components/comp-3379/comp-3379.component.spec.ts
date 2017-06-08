/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3379Component } from './comp-3379.component';

describe('Comp3379Component', () => {
  let component: Comp3379Component;
  let fixture: ComponentFixture<Comp3379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
