/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3708Component } from './comp-3708.component';

describe('Comp3708Component', () => {
  let component: Comp3708Component;
  let fixture: ComponentFixture<Comp3708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
