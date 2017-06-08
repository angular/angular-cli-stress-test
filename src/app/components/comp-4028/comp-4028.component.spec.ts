/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4028Component } from './comp-4028.component';

describe('Comp4028Component', () => {
  let component: Comp4028Component;
  let fixture: ComponentFixture<Comp4028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
