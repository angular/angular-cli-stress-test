/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3391Component } from './comp-3391.component';

describe('Comp3391Component', () => {
  let component: Comp3391Component;
  let fixture: ComponentFixture<Comp3391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
