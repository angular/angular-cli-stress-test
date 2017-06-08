/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2445Component } from './comp-2445.component';

describe('Comp2445Component', () => {
  let component: Comp2445Component;
  let fixture: ComponentFixture<Comp2445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
