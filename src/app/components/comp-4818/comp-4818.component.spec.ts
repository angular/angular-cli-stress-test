/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4818Component } from './comp-4818.component';

describe('Comp4818Component', () => {
  let component: Comp4818Component;
  let fixture: ComponentFixture<Comp4818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
