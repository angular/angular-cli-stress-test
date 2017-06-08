/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3274Component } from './comp-3274.component';

describe('Comp3274Component', () => {
  let component: Comp3274Component;
  let fixture: ComponentFixture<Comp3274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
