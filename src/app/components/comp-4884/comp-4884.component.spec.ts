/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4884Component } from './comp-4884.component';

describe('Comp4884Component', () => {
  let component: Comp4884Component;
  let fixture: ComponentFixture<Comp4884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
