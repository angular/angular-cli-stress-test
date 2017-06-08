/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3496Component } from './comp-3496.component';

describe('Comp3496Component', () => {
  let component: Comp3496Component;
  let fixture: ComponentFixture<Comp3496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
