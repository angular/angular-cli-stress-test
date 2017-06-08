/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3211Component } from './comp-3211.component';

describe('Comp3211Component', () => {
  let component: Comp3211Component;
  let fixture: ComponentFixture<Comp3211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
