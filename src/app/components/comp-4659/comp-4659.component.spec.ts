/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4659Component } from './comp-4659.component';

describe('Comp4659Component', () => {
  let component: Comp4659Component;
  let fixture: ComponentFixture<Comp4659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
