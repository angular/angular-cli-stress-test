/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1624Component } from './comp-1624.component';

describe('Comp1624Component', () => {
  let component: Comp1624Component;
  let fixture: ComponentFixture<Comp1624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
