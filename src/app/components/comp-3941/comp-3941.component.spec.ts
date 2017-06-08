/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3941Component } from './comp-3941.component';

describe('Comp3941Component', () => {
  let component: Comp3941Component;
  let fixture: ComponentFixture<Comp3941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
