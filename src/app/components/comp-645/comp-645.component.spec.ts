/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp645Component } from './comp-645.component';

describe('Comp645Component', () => {
  let component: Comp645Component;
  let fixture: ComponentFixture<Comp645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
