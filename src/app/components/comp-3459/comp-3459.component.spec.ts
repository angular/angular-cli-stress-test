/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3459Component } from './comp-3459.component';

describe('Comp3459Component', () => {
  let component: Comp3459Component;
  let fixture: ComponentFixture<Comp3459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
