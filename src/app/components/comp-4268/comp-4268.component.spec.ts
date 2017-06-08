/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4268Component } from './comp-4268.component';

describe('Comp4268Component', () => {
  let component: Comp4268Component;
  let fixture: ComponentFixture<Comp4268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
