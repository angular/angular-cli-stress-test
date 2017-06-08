/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3039Component } from './comp-3039.component';

describe('Comp3039Component', () => {
  let component: Comp3039Component;
  let fixture: ComponentFixture<Comp3039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
