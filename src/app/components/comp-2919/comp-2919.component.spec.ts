/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2919Component } from './comp-2919.component';

describe('Comp2919Component', () => {
  let component: Comp2919Component;
  let fixture: ComponentFixture<Comp2919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
