/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2247Component } from './comp-2247.component';

describe('Comp2247Component', () => {
  let component: Comp2247Component;
  let fixture: ComponentFixture<Comp2247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
