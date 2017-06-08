/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp766Component } from './comp-766.component';

describe('Comp766Component', () => {
  let component: Comp766Component;
  let fixture: ComponentFixture<Comp766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
