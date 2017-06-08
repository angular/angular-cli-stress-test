/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3215Component } from './comp-3215.component';

describe('Comp3215Component', () => {
  let component: Comp3215Component;
  let fixture: ComponentFixture<Comp3215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
