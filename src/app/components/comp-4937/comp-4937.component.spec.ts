/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4937Component } from './comp-4937.component';

describe('Comp4937Component', () => {
  let component: Comp4937Component;
  let fixture: ComponentFixture<Comp4937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
