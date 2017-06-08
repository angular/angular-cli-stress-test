/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp383Component } from './comp-383.component';

describe('Comp383Component', () => {
  let component: Comp383Component;
  let fixture: ComponentFixture<Comp383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
