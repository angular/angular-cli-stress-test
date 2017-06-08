/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4671Component } from './comp-4671.component';

describe('Comp4671Component', () => {
  let component: Comp4671Component;
  let fixture: ComponentFixture<Comp4671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
