/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp93Component } from './comp-93.component';

describe('Comp93Component', () => {
  let component: Comp93Component;
  let fixture: ComponentFixture<Comp93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
