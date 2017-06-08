/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3744Component } from './comp-3744.component';

describe('Comp3744Component', () => {
  let component: Comp3744Component;
  let fixture: ComponentFixture<Comp3744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
