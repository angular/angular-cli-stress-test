/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3595Component } from './comp-3595.component';

describe('Comp3595Component', () => {
  let component: Comp3595Component;
  let fixture: ComponentFixture<Comp3595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
