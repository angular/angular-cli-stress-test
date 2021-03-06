/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4413Component } from './comp-4413.component';

describe('Comp4413Component', () => {
  let component: Comp4413Component;
  let fixture: ComponentFixture<Comp4413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
