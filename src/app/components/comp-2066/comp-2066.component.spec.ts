/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2066Component } from './comp-2066.component';

describe('Comp2066Component', () => {
  let component: Comp2066Component;
  let fixture: ComponentFixture<Comp2066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
