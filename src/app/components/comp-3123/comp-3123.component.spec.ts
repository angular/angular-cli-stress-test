/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3123Component } from './comp-3123.component';

describe('Comp3123Component', () => {
  let component: Comp3123Component;
  let fixture: ComponentFixture<Comp3123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
