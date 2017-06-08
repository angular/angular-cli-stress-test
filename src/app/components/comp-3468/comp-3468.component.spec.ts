/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3468Component } from './comp-3468.component';

describe('Comp3468Component', () => {
  let component: Comp3468Component;
  let fixture: ComponentFixture<Comp3468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
