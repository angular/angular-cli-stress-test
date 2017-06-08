/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4607Component } from './comp-4607.component';

describe('Comp4607Component', () => {
  let component: Comp4607Component;
  let fixture: ComponentFixture<Comp4607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
