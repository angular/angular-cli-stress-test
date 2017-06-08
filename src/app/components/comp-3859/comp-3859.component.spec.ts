/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3859Component } from './comp-3859.component';

describe('Comp3859Component', () => {
  let component: Comp3859Component;
  let fixture: ComponentFixture<Comp3859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
