/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3534Component } from './comp-3534.component';

describe('Comp3534Component', () => {
  let component: Comp3534Component;
  let fixture: ComponentFixture<Comp3534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
