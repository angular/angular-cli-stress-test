/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4187Component } from './comp-4187.component';

describe('Comp4187Component', () => {
  let component: Comp4187Component;
  let fixture: ComponentFixture<Comp4187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
