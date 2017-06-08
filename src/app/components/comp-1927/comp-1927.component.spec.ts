/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1927Component } from './comp-1927.component';

describe('Comp1927Component', () => {
  let component: Comp1927Component;
  let fixture: ComponentFixture<Comp1927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
