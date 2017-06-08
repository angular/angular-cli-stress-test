/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3874Component } from './comp-3874.component';

describe('Comp3874Component', () => {
  let component: Comp3874Component;
  let fixture: ComponentFixture<Comp3874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
