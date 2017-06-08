/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3661Component } from './comp-3661.component';

describe('Comp3661Component', () => {
  let component: Comp3661Component;
  let fixture: ComponentFixture<Comp3661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
