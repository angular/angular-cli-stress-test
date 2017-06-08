/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp215Component } from './comp-215.component';

describe('Comp215Component', () => {
  let component: Comp215Component;
  let fixture: ComponentFixture<Comp215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
