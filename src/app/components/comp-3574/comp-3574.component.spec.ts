/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3574Component } from './comp-3574.component';

describe('Comp3574Component', () => {
  let component: Comp3574Component;
  let fixture: ComponentFixture<Comp3574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
