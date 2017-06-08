/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3722Component } from './comp-3722.component';

describe('Comp3722Component', () => {
  let component: Comp3722Component;
  let fixture: ComponentFixture<Comp3722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
