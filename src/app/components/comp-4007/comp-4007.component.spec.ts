/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4007Component } from './comp-4007.component';

describe('Comp4007Component', () => {
  let component: Comp4007Component;
  let fixture: ComponentFixture<Comp4007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
