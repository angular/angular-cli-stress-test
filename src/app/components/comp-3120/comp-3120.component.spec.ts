/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3120Component } from './comp-3120.component';

describe('Comp3120Component', () => {
  let component: Comp3120Component;
  let fixture: ComponentFixture<Comp3120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
