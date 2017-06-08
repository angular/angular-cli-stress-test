/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2699Component } from './comp-2699.component';

describe('Comp2699Component', () => {
  let component: Comp2699Component;
  let fixture: ComponentFixture<Comp2699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
