/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4946Component } from './comp-4946.component';

describe('Comp4946Component', () => {
  let component: Comp4946Component;
  let fixture: ComponentFixture<Comp4946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
