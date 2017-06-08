/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3028Component } from './comp-3028.component';

describe('Comp3028Component', () => {
  let component: Comp3028Component;
  let fixture: ComponentFixture<Comp3028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
