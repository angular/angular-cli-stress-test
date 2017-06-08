/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp430Component } from './comp-430.component';

describe('Comp430Component', () => {
  let component: Comp430Component;
  let fixture: ComponentFixture<Comp430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
