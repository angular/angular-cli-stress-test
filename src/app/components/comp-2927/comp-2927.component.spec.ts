/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2927Component } from './comp-2927.component';

describe('Comp2927Component', () => {
  let component: Comp2927Component;
  let fixture: ComponentFixture<Comp2927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
