/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3036Component } from './comp-3036.component';

describe('Comp3036Component', () => {
  let component: Comp3036Component;
  let fixture: ComponentFixture<Comp3036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
