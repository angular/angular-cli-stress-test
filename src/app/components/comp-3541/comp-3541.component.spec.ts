/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3541Component } from './comp-3541.component';

describe('Comp3541Component', () => {
  let component: Comp3541Component;
  let fixture: ComponentFixture<Comp3541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
