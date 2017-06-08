/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1130Component } from './comp-1130.component';

describe('Comp1130Component', () => {
  let component: Comp1130Component;
  let fixture: ComponentFixture<Comp1130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
