/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3179Component } from './comp-3179.component';

describe('Comp3179Component', () => {
  let component: Comp3179Component;
  let fixture: ComponentFixture<Comp3179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
