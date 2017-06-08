/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2668Component } from './comp-2668.component';

describe('Comp2668Component', () => {
  let component: Comp2668Component;
  let fixture: ComponentFixture<Comp2668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
