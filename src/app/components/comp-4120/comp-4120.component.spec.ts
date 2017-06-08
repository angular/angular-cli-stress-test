/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4120Component } from './comp-4120.component';

describe('Comp4120Component', () => {
  let component: Comp4120Component;
  let fixture: ComponentFixture<Comp4120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
