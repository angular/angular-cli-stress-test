/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2924Component } from './comp-2924.component';

describe('Comp2924Component', () => {
  let component: Comp2924Component;
  let fixture: ComponentFixture<Comp2924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
