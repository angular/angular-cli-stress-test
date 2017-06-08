/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2163Component } from './comp-2163.component';

describe('Comp2163Component', () => {
  let component: Comp2163Component;
  let fixture: ComponentFixture<Comp2163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
