/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3477Component } from './comp-3477.component';

describe('Comp3477Component', () => {
  let component: Comp3477Component;
  let fixture: ComponentFixture<Comp3477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
