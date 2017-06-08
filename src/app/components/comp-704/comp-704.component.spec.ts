/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp704Component } from './comp-704.component';

describe('Comp704Component', () => {
  let component: Comp704Component;
  let fixture: ComponentFixture<Comp704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
