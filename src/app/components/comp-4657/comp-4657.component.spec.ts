/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4657Component } from './comp-4657.component';

describe('Comp4657Component', () => {
  let component: Comp4657Component;
  let fixture: ComponentFixture<Comp4657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
