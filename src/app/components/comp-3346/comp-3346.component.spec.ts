/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3346Component } from './comp-3346.component';

describe('Comp3346Component', () => {
  let component: Comp3346Component;
  let fixture: ComponentFixture<Comp3346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
