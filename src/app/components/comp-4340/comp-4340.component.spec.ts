/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4340Component } from './comp-4340.component';

describe('Comp4340Component', () => {
  let component: Comp4340Component;
  let fixture: ComponentFixture<Comp4340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
