/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3195Component } from './comp-3195.component';

describe('Comp3195Component', () => {
  let component: Comp3195Component;
  let fixture: ComponentFixture<Comp3195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
