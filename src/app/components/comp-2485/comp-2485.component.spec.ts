/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2485Component } from './comp-2485.component';

describe('Comp2485Component', () => {
  let component: Comp2485Component;
  let fixture: ComponentFixture<Comp2485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
