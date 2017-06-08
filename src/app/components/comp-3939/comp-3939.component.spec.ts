/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3939Component } from './comp-3939.component';

describe('Comp3939Component', () => {
  let component: Comp3939Component;
  let fixture: ComponentFixture<Comp3939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
