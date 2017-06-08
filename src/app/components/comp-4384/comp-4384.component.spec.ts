/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4384Component } from './comp-4384.component';

describe('Comp4384Component', () => {
  let component: Comp4384Component;
  let fixture: ComponentFixture<Comp4384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
