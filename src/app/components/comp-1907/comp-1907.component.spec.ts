/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1907Component } from './comp-1907.component';

describe('Comp1907Component', () => {
  let component: Comp1907Component;
  let fixture: ComponentFixture<Comp1907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
