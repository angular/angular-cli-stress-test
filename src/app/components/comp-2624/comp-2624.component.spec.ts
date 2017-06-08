/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2624Component } from './comp-2624.component';

describe('Comp2624Component', () => {
  let component: Comp2624Component;
  let fixture: ComponentFixture<Comp2624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
