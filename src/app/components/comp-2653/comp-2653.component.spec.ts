/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2653Component } from './comp-2653.component';

describe('Comp2653Component', () => {
  let component: Comp2653Component;
  let fixture: ComponentFixture<Comp2653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
