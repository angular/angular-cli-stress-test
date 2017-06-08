/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3613Component } from './comp-3613.component';

describe('Comp3613Component', () => {
  let component: Comp3613Component;
  let fixture: ComponentFixture<Comp3613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
