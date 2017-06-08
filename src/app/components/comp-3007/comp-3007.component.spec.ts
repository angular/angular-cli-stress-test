/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3007Component } from './comp-3007.component';

describe('Comp3007Component', () => {
  let component: Comp3007Component;
  let fixture: ComponentFixture<Comp3007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
