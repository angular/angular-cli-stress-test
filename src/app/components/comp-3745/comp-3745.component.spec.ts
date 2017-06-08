/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3745Component } from './comp-3745.component';

describe('Comp3745Component', () => {
  let component: Comp3745Component;
  let fixture: ComponentFixture<Comp3745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
