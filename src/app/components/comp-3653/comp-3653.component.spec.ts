/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3653Component } from './comp-3653.component';

describe('Comp3653Component', () => {
  let component: Comp3653Component;
  let fixture: ComponentFixture<Comp3653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
