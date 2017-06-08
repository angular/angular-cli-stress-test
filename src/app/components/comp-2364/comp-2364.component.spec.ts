/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2364Component } from './comp-2364.component';

describe('Comp2364Component', () => {
  let component: Comp2364Component;
  let fixture: ComponentFixture<Comp2364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
