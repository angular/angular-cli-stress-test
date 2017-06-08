/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3571Component } from './comp-3571.component';

describe('Comp3571Component', () => {
  let component: Comp3571Component;
  let fixture: ComponentFixture<Comp3571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
