/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3205Component } from './comp-3205.component';

describe('Comp3205Component', () => {
  let component: Comp3205Component;
  let fixture: ComponentFixture<Comp3205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
