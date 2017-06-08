/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4175Component } from './comp-4175.component';

describe('Comp4175Component', () => {
  let component: Comp4175Component;
  let fixture: ComponentFixture<Comp4175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
