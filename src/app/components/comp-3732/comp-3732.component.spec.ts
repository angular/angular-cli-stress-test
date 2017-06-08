/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3732Component } from './comp-3732.component';

describe('Comp3732Component', () => {
  let component: Comp3732Component;
  let fixture: ComponentFixture<Comp3732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
