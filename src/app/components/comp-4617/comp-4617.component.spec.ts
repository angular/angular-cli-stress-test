/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4617Component } from './comp-4617.component';

describe('Comp4617Component', () => {
  let component: Comp4617Component;
  let fixture: ComponentFixture<Comp4617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
