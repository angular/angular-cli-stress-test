/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2978Component } from './comp-2978.component';

describe('Comp2978Component', () => {
  let component: Comp2978Component;
  let fixture: ComponentFixture<Comp2978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
