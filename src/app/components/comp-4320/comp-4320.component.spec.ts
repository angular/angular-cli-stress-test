/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4320Component } from './comp-4320.component';

describe('Comp4320Component', () => {
  let component: Comp4320Component;
  let fixture: ComponentFixture<Comp4320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
