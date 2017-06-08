/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp588Component } from './comp-588.component';

describe('Comp588Component', () => {
  let component: Comp588Component;
  let fixture: ComponentFixture<Comp588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
