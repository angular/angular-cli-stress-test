/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3718Component } from './comp-3718.component';

describe('Comp3718Component', () => {
  let component: Comp3718Component;
  let fixture: ComponentFixture<Comp3718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
