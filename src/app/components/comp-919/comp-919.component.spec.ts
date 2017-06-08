/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp919Component } from './comp-919.component';

describe('Comp919Component', () => {
  let component: Comp919Component;
  let fixture: ComponentFixture<Comp919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
