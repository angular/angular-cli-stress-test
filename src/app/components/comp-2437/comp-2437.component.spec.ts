/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2437Component } from './comp-2437.component';

describe('Comp2437Component', () => {
  let component: Comp2437Component;
  let fixture: ComponentFixture<Comp2437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
