/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3222Component } from './comp-3222.component';

describe('Comp3222Component', () => {
  let component: Comp3222Component;
  let fixture: ComponentFixture<Comp3222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
