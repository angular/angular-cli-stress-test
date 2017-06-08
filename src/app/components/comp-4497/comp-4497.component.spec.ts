/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4497Component } from './comp-4497.component';

describe('Comp4497Component', () => {
  let component: Comp4497Component;
  let fixture: ComponentFixture<Comp4497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
