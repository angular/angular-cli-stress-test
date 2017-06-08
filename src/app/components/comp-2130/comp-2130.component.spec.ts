/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2130Component } from './comp-2130.component';

describe('Comp2130Component', () => {
  let component: Comp2130Component;
  let fixture: ComponentFixture<Comp2130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
