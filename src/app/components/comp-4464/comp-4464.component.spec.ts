/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4464Component } from './comp-4464.component';

describe('Comp4464Component', () => {
  let component: Comp4464Component;
  let fixture: ComponentFixture<Comp4464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
