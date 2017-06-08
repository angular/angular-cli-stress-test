/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3336Component } from './comp-3336.component';

describe('Comp3336Component', () => {
  let component: Comp3336Component;
  let fixture: ComponentFixture<Comp3336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
