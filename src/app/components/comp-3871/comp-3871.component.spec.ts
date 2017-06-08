/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3871Component } from './comp-3871.component';

describe('Comp3871Component', () => {
  let component: Comp3871Component;
  let fixture: ComponentFixture<Comp3871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
