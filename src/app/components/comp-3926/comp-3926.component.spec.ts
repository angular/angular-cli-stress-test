/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3926Component } from './comp-3926.component';

describe('Comp3926Component', () => {
  let component: Comp3926Component;
  let fixture: ComponentFixture<Comp3926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
