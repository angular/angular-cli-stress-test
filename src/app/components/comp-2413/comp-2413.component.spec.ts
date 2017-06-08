/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2413Component } from './comp-2413.component';

describe('Comp2413Component', () => {
  let component: Comp2413Component;
  let fixture: ComponentFixture<Comp2413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
