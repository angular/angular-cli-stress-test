/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp184Component } from './comp-184.component';

describe('Comp184Component', () => {
  let component: Comp184Component;
  let fixture: ComponentFixture<Comp184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
