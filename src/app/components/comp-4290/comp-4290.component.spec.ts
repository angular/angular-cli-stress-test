/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4290Component } from './comp-4290.component';

describe('Comp4290Component', () => {
  let component: Comp4290Component;
  let fixture: ComponentFixture<Comp4290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
