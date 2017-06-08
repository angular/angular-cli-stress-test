/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4345Component } from './comp-4345.component';

describe('Comp4345Component', () => {
  let component: Comp4345Component;
  let fixture: ComponentFixture<Comp4345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
