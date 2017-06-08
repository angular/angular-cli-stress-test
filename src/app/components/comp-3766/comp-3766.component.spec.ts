/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3766Component } from './comp-3766.component';

describe('Comp3766Component', () => {
  let component: Comp3766Component;
  let fixture: ComponentFixture<Comp3766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
