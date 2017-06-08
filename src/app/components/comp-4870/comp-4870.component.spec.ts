/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4870Component } from './comp-4870.component';

describe('Comp4870Component', () => {
  let component: Comp4870Component;
  let fixture: ComponentFixture<Comp4870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
