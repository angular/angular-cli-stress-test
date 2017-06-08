/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4164Component } from './comp-4164.component';

describe('Comp4164Component', () => {
  let component: Comp4164Component;
  let fixture: ComponentFixture<Comp4164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
