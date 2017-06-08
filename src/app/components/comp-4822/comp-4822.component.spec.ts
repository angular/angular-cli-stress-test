/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4822Component } from './comp-4822.component';

describe('Comp4822Component', () => {
  let component: Comp4822Component;
  let fixture: ComponentFixture<Comp4822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
