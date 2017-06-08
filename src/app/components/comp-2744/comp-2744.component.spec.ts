/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2744Component } from './comp-2744.component';

describe('Comp2744Component', () => {
  let component: Comp2744Component;
  let fixture: ComponentFixture<Comp2744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
