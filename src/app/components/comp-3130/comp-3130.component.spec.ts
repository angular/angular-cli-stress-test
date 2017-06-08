/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3130Component } from './comp-3130.component';

describe('Comp3130Component', () => {
  let component: Comp3130Component;
  let fixture: ComponentFixture<Comp3130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
