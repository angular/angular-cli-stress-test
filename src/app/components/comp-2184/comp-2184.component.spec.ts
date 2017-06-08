/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2184Component } from './comp-2184.component';

describe('Comp2184Component', () => {
  let component: Comp2184Component;
  let fixture: ComponentFixture<Comp2184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
