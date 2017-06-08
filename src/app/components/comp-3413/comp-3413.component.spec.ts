/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3413Component } from './comp-3413.component';

describe('Comp3413Component', () => {
  let component: Comp3413Component;
  let fixture: ComponentFixture<Comp3413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
