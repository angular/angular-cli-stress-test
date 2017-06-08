/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp320Component } from './comp-320.component';

describe('Comp320Component', () => {
  let component: Comp320Component;
  let fixture: ComponentFixture<Comp320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
