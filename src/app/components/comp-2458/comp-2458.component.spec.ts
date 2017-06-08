/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2458Component } from './comp-2458.component';

describe('Comp2458Component', () => {
  let component: Comp2458Component;
  let fixture: ComponentFixture<Comp2458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
