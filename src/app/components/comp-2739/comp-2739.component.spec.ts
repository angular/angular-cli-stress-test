/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2739Component } from './comp-2739.component';

describe('Comp2739Component', () => {
  let component: Comp2739Component;
  let fixture: ComponentFixture<Comp2739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
