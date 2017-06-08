/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3953Component } from './comp-3953.component';

describe('Comp3953Component', () => {
  let component: Comp3953Component;
  let fixture: ComponentFixture<Comp3953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
