/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2584Component } from './comp-2584.component';

describe('Comp2584Component', () => {
  let component: Comp2584Component;
  let fixture: ComponentFixture<Comp2584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
