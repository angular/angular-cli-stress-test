/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2379Component } from './comp-2379.component';

describe('Comp2379Component', () => {
  let component: Comp2379Component;
  let fixture: ComponentFixture<Comp2379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
