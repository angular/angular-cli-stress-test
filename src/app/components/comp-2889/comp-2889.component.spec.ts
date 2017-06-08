/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2889Component } from './comp-2889.component';

describe('Comp2889Component', () => {
  let component: Comp2889Component;
  let fixture: ComponentFixture<Comp2889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
