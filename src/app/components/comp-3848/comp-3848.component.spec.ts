/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3848Component } from './comp-3848.component';

describe('Comp3848Component', () => {
  let component: Comp3848Component;
  let fixture: ComponentFixture<Comp3848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
