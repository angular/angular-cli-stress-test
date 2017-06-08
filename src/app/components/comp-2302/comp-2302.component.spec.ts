/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2302Component } from './comp-2302.component';

describe('Comp2302Component', () => {
  let component: Comp2302Component;
  let fixture: ComponentFixture<Comp2302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
