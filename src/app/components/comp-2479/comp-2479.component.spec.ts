/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2479Component } from './comp-2479.component';

describe('Comp2479Component', () => {
  let component: Comp2479Component;
  let fixture: ComponentFixture<Comp2479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
