/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2267Component } from './comp-2267.component';

describe('Comp2267Component', () => {
  let component: Comp2267Component;
  let fixture: ComponentFixture<Comp2267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
