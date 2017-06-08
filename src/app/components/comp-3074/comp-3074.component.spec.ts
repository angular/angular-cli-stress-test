/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3074Component } from './comp-3074.component';

describe('Comp3074Component', () => {
  let component: Comp3074Component;
  let fixture: ComponentFixture<Comp3074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
