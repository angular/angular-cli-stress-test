/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2645Component } from './comp-2645.component';

describe('Comp2645Component', () => {
  let component: Comp2645Component;
  let fixture: ComponentFixture<Comp2645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
