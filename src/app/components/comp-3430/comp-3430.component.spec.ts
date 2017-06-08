/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3430Component } from './comp-3430.component';

describe('Comp3430Component', () => {
  let component: Comp3430Component;
  let fixture: ComponentFixture<Comp3430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
